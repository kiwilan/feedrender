import type { H3Event } from 'h3'
import { getQuery } from 'h3'
import { Database } from '@/services/database'

export default async (event: H3Event) => {
  const query = getQuery(event)
  const dotenv = globalThis.dotenv()

  if (!query.token)
    globalThis.error(event, 'token is required as query parameter')

  if (query.token !== dotenv.TOKEN) {
    return {
      message: 'Invalid token',
    }
  }

  if (!query.url)
    globalThis.error(event, 'url is required as query parameter')

  const db = Database.make()
  const current = await db.find('users', 'url', query.url)

  if (!current) {
    return {
      message: 'URL not registered',
    }
  }

  await db.delete('users', 'url', query.url)

  return {
    message: `URL ${current.url} deleted`,
  }
}
