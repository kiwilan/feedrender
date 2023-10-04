import { route } from '../router'

export default async () => {
  return {
    message: 'feedrender API docs',
    links: {
      render: {
        url: route('/api/render'),
        query: {
          url: '`string`, required, url to RSS feed (could be base64 encoded)',
          format: '`html` or `json`, optional, default `html`, type of response, default `html` will render HTML page, `json` will give JSON response with HTML string',
        },
        about: 'Render HTML from RSS feed. If User-Agent is not a browser, it will return XML RSS feed',
        example: route('/api/render', { query: { url: 'https://2hdp.fr/2HDP.xml' } }),
      },
      parser: {
        url: route('/api/json'),
        query: {
          url: '`string`, required, url to RSS feed (could be base64 encoded)',
        },
        about: 'Parse RSS feed and return JSON',
        example: route('/api/json', { query: { url: 'https://2hdp.fr/2HDP.xml' } }),
      },
      xml: {
        url: route('/api/xml'),
        query: {
          url: '`string`, required, url to RSS feed (could be base64 encoded)',
        },
        about: 'Parse XML RSS feed and return XML (useful for feeds with HTML render)',
        example: route('/api/xml', { query: { url: 'https://feedpress.me/rdvjeux' } }),
      },
      // register: {
      //   url: route('/api/register'),
      //   query: {
      //     url: '`string`, required, url to RSS feed (could be base64 encoded)',
      //   },
      //   about: 'Register RSS feed and return JSON',
      // },
    },
  }
}
