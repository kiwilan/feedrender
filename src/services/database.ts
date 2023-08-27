import { mkdir } from 'node:fs'
import sqlite3 from 'sqlite3'

const directory = './data'
const filepath = `${directory}/database.sqlite`
type Table = 'users'

export async function createUsersTable(): Promise<void> {
  const db = Database.make()
  await db.dropTable('users')
  await db.table('users', [
    'id INTEGER PRIMARY KEY',
    'email TEXT',
    'password TEXT',
    'bearer TEXT',
    'url TEXT',
    'token TEXT',
    'timestamp DATETIME DEFAULT CURRENT_TIMESTAMP',
  ])
  await db.truncateTable('users')
  db.close()
}

export class Database {
  protected constructor(
    protected client: sqlite3.Database,
  ) {}

  public static make(): Database {
    mkdir(directory, { recursive: true }, (err) => {
      if (err)
        return console.error(err)
    })
    const client = new sqlite3.Database(filepath, (error) => {
      if (error)
        return console.error(error.message)
    })

    const self = new Database(client)

    return self
  }

  public async table(name: Table, columns: string[] = []) {
    await this.dbRun(`CREATE TABLE IF NOT EXISTS ${name} (${columns.join(', ')})`)
  }

  public async dropTable(name: Table) {
    await this.dbRun(`DROP TABLE IF EXISTS ${name}`)
  }

  public async truncateTable(name: Table) {
    await this.dbRun(`DELETE FROM ${name}`)
  }

  public async insert(table: Table, data: Record<string, any>) {
    const keys = Object.keys(data).join(', ')
    const values = Object.values(data)
    const joker = keys.split(', ').map(() => '?').join(', ')
    const sql = `INSERT INTO ${table}(${keys}) VALUES(${joker})`

    return await this.dbRun(sql, values)
  }

  public async all(table: Table) {
    const sql = `SELECT * FROM ${table}`

    const data: any[] = []
    const rows = await this.dbAll(sql)

    rows.forEach((row) => {
      data.push(row)
    })

    return data
  }

  public async get<T = any>(table: Table, data: Record<string, string>): Promise<T | undefined> {
    const keys = Object.keys(data).join(', ')
    const values = Object.values(data)
    const joker = keys.split(', ').map(() => '?').join(', ')

    const sql = `SELECT * FROM ${table} WHERE ${keys} = ${joker}`
    const params = [...values]

    const rows = await this.dbAll(sql, params)

    if (rows.length === 0)
      return undefined

    return rows[0] as T
  }

  public async findAll(table: Table, column: string, value: string) {
    const sql = `SELECT * FROM ${table} WHERE ${column} = ?`

    const data: any[] = []
    const rows = await this.dbAll(sql, [value])

    rows.forEach((row) => {
      data.push(row)
    })

    return data
  }

  public async find(table: Table, column: string, value: any) {
    const data = await this.findAll(table, column, value)
    if (data.length === 0)
      return null

    return data[0]
  }

  public async update(table: Table, column: string, value: any, data: Record<string, any>) {
    const keys = Object.keys(data).join(', ')
    const values = Object.values(data)
    const joker = keys.split(', ').map(() => '?').join(', ')

    const sql = `UPDATE ${table} SET ${keys} = ${joker} WHERE ${column} = ?`
    const params = [...values, value]

    return await this.dbRun(sql, params)
  }

  public async delete(table: Table, column: string, value: any) {
    const sql = `DELETE FROM ${table} WHERE ${column} = ?`

    return await this.dbRun(sql, [value])
  }

  public close(): void {
    this.client.close()
  }

  private dbRun(sql: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.client.run(sql, params, (err, res) => {
        if (err) {
          console.error('DB Error: run failed: ', err.message)
          return reject(err.message)
        }

        return resolve(res)
      })
    })
  }

  private dbAll(sql: string, params?: any): Promise<any[]> {
    return new Promise((resolve, reject) => {
      return this.client.all(sql, params, (err, rows) => {
        if (err) {
          console.error('DB Error: all failed: ', err.message)
          return reject(err.message)
        }

        return resolve(rows)
      })
    })
  }
}
