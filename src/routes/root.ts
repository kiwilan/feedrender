import { route } from './router'

export default () => {
  return {
    message: 'Welcome on feedrender API',
    description: 'API to render HTML from RSS feed. Built for podcast feeds, powered by unjs/h3.',
    docs: route('/api'),
    github: 'https://github.com/kiwilan/feedrender',
  }
}
