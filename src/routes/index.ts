import { createRouter } from 'h3'
import { createRoute } from './router'
import rootEvent from './root'
import apiEvent from './api/index'
import apiRenderEvent from './api/render'
import apiParserEvent from './api/parser'

const root: Route = '/'
const api: Route = '/api'
const apiRender: Route = '/api/render'
const apiParser: Route = '/api/parser'

export const router = createRouter()
  .get(root, createRoute(rootEvent))
  .get(api, createRoute(apiEvent))
  .get(apiRender, createRoute(apiRenderEvent))
  .get(apiParser, createRoute(apiParserEvent))
