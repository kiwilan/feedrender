import { createRouter, eventHandler, getQuery, sendRedirect } from 'h3'
import { Dotenv, Parser } from './services'

function isBrowser(userAgent?: string): boolean {
  if (!userAgent)
    return false

  return userAgent.includes('Mozilla')
}

export const router = createRouter()
  .get(
    '/',
    eventHandler(() => {
      const dotenv = Dotenv.load()

      return {
        message: 'Welcome on feedrender API',
        docs: `${dotenv.BASE_URL}/api`,
      }
    }),
  )
  .get('/api', eventHandler(() => {
    const dotenv = Dotenv.load()

    return {
      message: 'Welcome on feedrender API',
      links: {
        render: {
          url: `${dotenv.BASE_URL}/api/render`,
          query: {
            url: '`string`, required, url to RSS feed (could be base64 encoded)',
            format: '`html`, `json` or `xml`, optional, default `html`, type of response, default `html` will render HTML page, `json` will give JSON response with HTML string and `xml` will give original RSS feed',
          },
          about: 'Render HTML from RSS feed. If User-Agent is not a browser, it will return XML RSS feed',
        },
        parser: {
          url: `${dotenv.BASE_URL}/api/parser`,
          query: {
            url: '`string`, required, url to RSS feed (could be base64 encoded)',
          },
          about: 'Parse RSS feed and return JSON',
        },
      },
      github: 'https://github.com/kiwilan/feedrender',
    }
  }))
  .get('/api/render', eventHandler(async (event) => {
    const query = getQuery(event)
    const format = query.format || 'html'
    const lang = event.node.req.headers['accept-language'] || 'en-US'
    const parser = await Parser.make(query, lang)
    const error = parser.getError()

    if (!isBrowser(event.node.req.headers['user-agent']))
      sendRedirect(event, (query.url as string), 302)

    if (error) {
      return {
        error,
      }
    }

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
  }))

  .get('/api/parser', eventHandler(async (event) => {
    const query = getQuery(event)
    const lang = event.node.req.headers['accept-language'] || 'en-US'
    const render = await Parser.make(query, lang)
    const error = render.getError()

    if (error) {
      return {
        error,
      }
    }

    return {
      url: render.getUrl(),
      data: render.getPodcast(),
      date: new Date().toISOString(),
    }
  }))
