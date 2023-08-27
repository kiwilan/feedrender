import { type H3Event, getQuery, sendRedirect } from 'h3'
import { Parser } from '../../services'

function isBrowser(userAgent?: string): boolean {
  if (!userAgent)
    return false

  return userAgent.includes('Mozilla')
}

export default async (event: H3Event) => {
  const query = getQuery(event)
  const format = query.format || 'html'
  const lang = event.node.req.headers['accept-language'] || 'en-US'
  const parser = await Parser.make(query, lang)
  const error = parser.getError()

  if (!isBrowser(event.node.req.headers['user-agent']))
    sendRedirect(event, (query.url as string), 302)

  if (error)
    globalThis.error(event, error)

  if (format === 'json') {
    return {
      url: parser.getUrl(),
      data: await parser.getRender(),
      date: new Date().toISOString(),
    }
  }

  if (format === 'xml') {
    event.node.res.setHeader('Content-Type', 'text/xml')

    return parser.getXml()
  }

  return await parser.getRender()
}
