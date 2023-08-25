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
            default: 'This endpoint will return HTML render from XML RSS feed, if User-Agent is not a browser, it will return XML RSS feed',
            url: '`string`, required, url to RSS feed (could be base64 encoded)',
            html: '`boolean`, default: `false`, return HTML data into JSON response',
            json: '`boolean`, default: `false`, return Podcast object into JSON response',
            xml: '`boolean`, default: `false`, return XML RSS feed',
          },
          about: 'Render HTML from RSS feed',
        },
      },
    }
  }))
  .get('/api/renderer', eventHandler(async (event) => {
    const query = getQuery(event)
    const renderer = await Renderer.make(query)
    const error = renderer.getError()

    if (error) {
      return {
        error,
      }
    }

    if (query?.html === 'true') {
      return {
        url: renderer.getUrl(),
        data: await renderer.getRender(),
        date: new Date().toISOString(),
      }
    }

    if (query.json === 'true') {
      return {
        url: renderer.getUrl(),
        data: renderer.getPodcast(),
        date: new Date().toISOString(),
      }
    }

    if (query.xml === 'true') {
      event.node.res.setHeader('Content-Type', 'text/xml')

      return renderer.getXml()
    }

    if (!isBrowser(event.node.req.headers['user-agent'])) {
      event.node.res.setHeader('Content-Type', 'text/xml')

      return renderer.getXml()
    }

    return await renderer.getRender()
  }))
