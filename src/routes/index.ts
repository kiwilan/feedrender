import { createRouter } from 'h3'
import { createRoute } from './router'
import { root } from './root'
import { api } from './api/index'
import { apiRender } from './api/render'
import { apiParser } from './api/parser'
import { apiRegister } from './api/register'

export const router = createRouter()
  .get('/', createRoute(root))
  .get('/api', createRoute(api))
  .get('/api/render', createRoute(apiRender))
  .get('/api/parser', createRoute(apiParser))
  .get('/api/register', createRoute(apiRegister))
