import bcrypt from 'bcrypt'
import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import { Database } from '@/services/database'

export interface UserBody {
  email: string
  password: string
  confirmPassword: string
  url: string
}

export class User {
  constructor(
    public email?: string,
    private password?: string,
    public url?: string,
    public id?: number,
    public token?: string,
    public bearer?: string,
    public timestamp?: Date,
  ) {
  }

  public static async create(body: UserBody, event: H3Event): Promise<User | void> {
    if (!body.password || body.password !== body.confirmPassword) {
      globalThis.error(event, 'Passwords do not match')
      return
    }

    const db = Database.make()
    const exists = await db.get('users', { email: body.email })

    if (exists) {
      globalThis.error(event, 'User already exists')
      return
    }

    const user = new User(body.email, body.password, body.url)
    user.password = await user.hash(body.password)

    await db.insert('users', { email: user.email, password: user.password, url: user.url })

    return user
  }

  public static async login(body: { email: string; password: string }, event: H3Event): Promise<User | void> {
    const db = Database.make()
    const user = await db.get<User>('users', { email: body.email })

    if (!user) {
      globalThis.error(event, 'User does not exist')
      return
    }

    const model = new User(user.email, user.password, user.url)
    model.password = user.password

    const match = await model.compare(body.password)

    if (!match) {
      globalThis.error(event, 'Password is incorrect')
      return
    }

    const dotenv = globalThis.dotenv()
    user.password = undefined
    user.bearer = jwt.sign({
      data: user,
    }, dotenv.TOKEN, { expiresIn: '30d' })

    return user
  }

  public static async verify(token: string, event: H3Event): Promise<User | void> {
    const dotenv = globalThis.dotenv()
    const decoded = jwt.verify(token, dotenv.TOKEN) as { data: User }

    if (!decoded) {
      globalThis.error(event, 'Invalid token')
      return
    }

    const db = Database.make()
    const user = await db.get<User>('users', { email: decoded.data.email! })

    if (!user) {
      globalThis.error(event, 'User does not exist')
      return
    }

    return user
  }

  private async hash(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
  }

  public async compare(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password!)
  }
}
