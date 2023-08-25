import { createRouter, eventHandler, getQuery } from 'h3'
import { Dotenv, Renderer } from './services'

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
        message: 'Welcome on feed-renderer API',
        docs: `${dotenv.BASE_URL}/api`,
      }
    }),
  )
  .get('/api', eventHandler(() => {
    const dotenv = Dotenv.load()

    return {
      message: 'Welcome on feed-renderer API',
      links: {
        renderer: {
          url: `${dotenv.BASE_URL}/api/renderer`,
          query: {
            url: '`string`, required, url to RSS feed (could be base64 encoded)',
            format: '`html`, `json` or `xml`, optional, default `html`, type of response, default `html` will render HTML page, `json` will give JSON response with HTML string and `xml` will give original RSS feed',
          },
          about: 'Render HTML from RSS feed. If User-Agent is not a browser, it will return XML RSS feed',
        },
      },
    }
  }))
  .get('/api/renderer', eventHandler(async (event) => {
    const query = getQuery(event)
    const format = query.format || 'html'
    const lang = event.node.req.headers['accept-language'] || 'en-US'
    const renderer = await Renderer.make(query, lang)
    const error = renderer.getError()

    if (error) {
      return {
        error,
      }
    }

    if (format === 'json') {
      return {
        url: renderer.getUrl(),
        data: await renderer.getRender(),
        date: new Date().toISOString(),
      }
    }

    if (format === 'xml' || !isBrowser(event.node.req.headers['user-agent'])) {
      event.node.res.setHeader('Content-Type', 'text/xml')

      return renderer.getXml()
    }

    return await renderer.getRender()
  }))

  .get('/api/parser', eventHandler(async (event) => {
    const query = getQuery(event)
    const lang = event.node.req.headers['accept-language'] || 'en-US'
    const renderer = await Renderer.make(query, lang)
    const error = renderer.getError()

    if (error) {
      return {
        error,
      }
    }

    return {
      url: renderer.getUrl(),
      data: renderer.getPodcast(),
      date: new Date().toISOString(),
    }
  }))
