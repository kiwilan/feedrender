import { createRouter } from 'h3'
import api from './api/index'
import apiJson from './api/json'
import apiRender from './api/render'
import apiXml from './api/xml'
import root from './root'
import { createRoute } from './router'

export const router = createRouter()
  .get('/', createRoute(root))
  .get('/api', createRoute(api))
  .get('/api/render', createRoute(apiRender))
  .get('/api/json', createRoute(apiJson))
  .get('/api/xml', createRoute(apiXml))
