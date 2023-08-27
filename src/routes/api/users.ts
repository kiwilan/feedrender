import { Database } from '@/services/database'

export default async () => {
  const db = Database.make()
  const users: any[] = await db.all('users')

  return {
    users,
  }
}
