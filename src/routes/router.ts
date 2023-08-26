import { eventHandler } from 'h3'
import type { EventHandler } from 'h3'

interface Params {
  params?: Record<string, string | number>
  query?: Record<string, string | number>
}

export function route(name: Route, extras?: Params): string {
  const dotenv = globalThis.dotenv()
  let url = `${dotenv.baseURL}${name}`

  if (!extras)
    return url

  const params = Object.entries(extras.params || {})
    // eslint-disable-next-line unused-imports/no-unused-vars
    .map(([key, value]) => value)
    .join('/')

  if (params)
    url = `${url}/${params}`

  const query = Object.entries(extras.query || {})
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

  if (query)
    url = `${url}?${query}`

  return url
}

export function createRoute(path: string): EventHandler {
  return eventHandler(event => import(path)
    .then(module => module.default(event))
    .catch((error) => {
      globalThis.error(event, error)
      console.error(error)
    }),
  )
}
