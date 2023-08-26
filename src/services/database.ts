import sqlite3 from 'sqlite3'

const filepath = './feedrender.db'
type Table = 'users'

export class Database {
  protected constructor(
    protected client: sqlite3.Database,
  ) {}

  public static execute(callback: (db: Database) => Promise<void>) {
    const client = new sqlite3.Database(filepath, (error) => {
      if (error)
        return console.error(error.message)
    })

    const self = new Database(client)
    callback(self).then(() => {
      self.client.close()
    })

    return Promise.resolve()
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

  // public insert(table: Table, data: Record<string, string>) {
  //   const keys = Object.keys(data).join(', ')
  //   const values = Object.values(data)

  //   this.run(`INSERT INTO ${table}(${keys}) VALUES(?, ?)`, values)
  // }

  // public all(table: Table) {
  //   const data: any[] = []
  //   this.run(`SELECT * FROM ${table}`, (err, rows) => {
  //     if (err)
  //       return console.error(err.message)

  //     rows.forEach((row) => {
  //       data.push(row)
  //     })
  //   })

  //   return data
  // }

  public async all(table: Table) {
    const sql = `SELECT * FROM ${table}`

    const data: any[] = []
    const rows = await this.dbAll(sql)

    rows.forEach((row) => {
      data.push(row)
    })

    return data
  }

  public async insert(table: Table, data: Record<string, string>) {
    const keys = Object.keys(data).join(', ')
    const values = Object.values(data)
    const joker = keys.split(', ').map(() => '?').join(', ')
    const sql = `INSERT INTO ${table}(${keys}) VALUES(${joker})`

    return await this.dbRun(sql, values)
  }

  private dbRun(sql: string, params?: any) {
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

  private dbAll(sql: string, params?: any): any {
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
