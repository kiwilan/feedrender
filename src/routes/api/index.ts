import { route } from '../router'

export default async () => {
  return {
    message: 'feedrender API docs',
    links: {
      render: {
        url: route('/api/render'),
        query: {
          url: '`string`, required, url to RSS feed (could be base64 encoded)',
          format: '`html`, `json` or `xml`, optional, default `html`, type of response, default `html` will render HTML page, `json` will give JSON response with HTML string and `xml` will give original RSS feed',
        },
        about: 'Render HTML from RSS feed. If User-Agent is not a browser, it will return XML RSS feed',
        example: route('/api/render', { query: { url: 'https://2hdp.fr/2HDP.xml' } }),
      },
      parser: {
        url: route('/api/parser'),
        query: {
          url: '`string`, required, url to RSS feed (could be base64 encoded)',
        },
        about: 'Parse RSS feed and return JSON',
        example: route('/api/parser', { query: { url: 'https://2hdp.fr/2HDP.xml' } }),
      },
      register: {
        url: route('/api/register'),
        query: {
          url: '`string`, required, url to RSS feed (could be base64 encoded)',
        },
        about: 'Register RSS feed and return JSON',
      },
    },
  }
}
