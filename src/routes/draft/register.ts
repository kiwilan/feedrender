import { type H3Event } from 'h3'
import type { UserBody } from '@/models/User'
import { User } from '@/models/User'

export default async (event: H3Event) => {
  const body = await globalThis.parseBody<UserBody>(event)
  const user = await User.create(body, event)

  return {
    body,
    user,
  }
}
