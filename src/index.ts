import { createApp } from 'h3'
import { router } from './routes'
import { Database } from './services/database'
import './functions'

export const app = createApp()
app.use(router)

function randomString(length: number = 10) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))

  return result
}

async function dbInit() {
  await Database.execute(async (db) => {
    await db.dropTable('users')
    await db.table('users', ['id INTEGER PRIMARY KEY', 'url TEXT', 'token TEXT'])
    await db.truncateTable('users')
    await db.insert('users', { url: 'https://2hdp.fr/2HDP.xml', token: randomString() })
    await db.insert('users', { url: 'https://feeds.acast.com/public/shows/cabcdc65-9f15-5900-a971-d6d96f16ed31', token: randomString() })
    await db.insert('users', { url: 'http://feeds.feedburner.com/LaperoDuCaptain', token: randomString() })
    const users = await db.all('users')
    console.error(users)
  })
}
dbInit()
