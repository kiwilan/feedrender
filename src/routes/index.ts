import { createRouter } from 'h3'
import { createRoute } from './router'

const root: Route = '/'
const api: Route = '/api'
const apiRender: Route = '/api/render'
const apiParser: Route = '/api/parser'

export const router = createRouter()
  .get(root, createRoute('./root'))
  .get(api, createRoute('./api/index'))
  .get(apiRender, createRoute('./api/render'))
  .get(apiParser, createRoute('./api/parser'))
