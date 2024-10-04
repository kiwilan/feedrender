import { getQuery, type H3Event } from 'h3'
import { Parser } from '../../services'

export default async (event: H3Event) => {
  const query = getQuery(event)
  const lang = event.node.req.headers['accept-language'] || 'en-US'
  const render = await Parser.make(query, lang)
  const error = render.getError()

  if (error)
    globalThis.error(event, error)

  return {
    url: render.getUrl(),
    data: render.getPodcast(),
    date: new Date().toISOString(),
  }
}
