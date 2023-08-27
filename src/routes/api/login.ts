import { type H3Event } from 'h3'
import { User } from '@/models/User'

export default async (event: H3Event) => {
  const body = await globalThis.parseBody<{ email: string; password: string }>(event)
  const user = await User.login(body, event)

  return {
    body,
    user,
  }
}
