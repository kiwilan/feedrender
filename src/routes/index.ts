import { createRouter } from 'h3'
import { createRoute } from './router'
import root from './root'
import api from './api/index'
import apiRender from './api/render'
import apiJson from './api/json'
import apiXml from './api/xml'

export const router = createRouter()
  .get('/', createRoute(root))
  .get('/api', createRoute(api))
  .get('/api/render', createRoute(apiRender))
  .get('/api/json', createRoute(apiJson))
  .get('/api/xml', createRoute(apiXml))
