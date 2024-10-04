import { getQuery, type H3Event } from 'h3'
import { Parser } from '../../services'

export default async (event: H3Event) => {
  const query = getQuery(event)
  const parser = await Parser.make(query, event.node.req.headers['accept-language'] as string)

  event.node.res.setHeader('Content-Type', 'text/xml')

  return parser.getXml()
}
