import { createRouter, eventHandler } from 'h3'
import { Dotenv, Renderer } from './services'

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
          about: 'Render HTML from RSS feed',
        },
        json: {
          url: `${dotenv.BASE_URL}/api/json`,
          about: 'Render JSON from RSS feed',
        },
      },
    }
  }))
  .get('/api/renderer', eventHandler(async (event) => {
    const renderer = await Renderer.make(event)
    const error = renderer.getError()

    if (error) {
      return {
        error,
      }
    }

    return {
      html: renderer.getRender(),
    }
  }))
  .get('/api/json', eventHandler(async (event) => {
    const renderer = await Renderer.make(event)
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
