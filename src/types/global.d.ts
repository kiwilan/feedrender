import type { H3Event } from 'h3'
import type { IDotenv } from '../services/dotenv'

export {}

declare global {
  type Route = '/' | '/api' | '/api/render' | '/api/json' | '/api/xml' | '/api/users'

  function dotenv(): IDotenv
  function error(event: H3Event, message: string, statusCode?: number, data?: any): void
  function parseBody<T>(event: H3Event): Promise<T>
}
