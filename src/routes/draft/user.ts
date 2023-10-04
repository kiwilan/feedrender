import type { H3Event } from 'h3'
import { User } from '@/models/User'

function verifyToken(event: H3Event): string {
  let token = event.node.req.headers.authorization
  if (!token)
    globalThis.error(event, 'No token provided', 401)

  token = token?.replace('Bearer ', '')

  return token as string
}

export default async (event: H3Event) => {
  const token = verifyToken(event)
  const user = await User.verify(token, event)

  // const db = Database.make()
  // const user = await db.get<User>('users')

  return {
    user,
  }
}
