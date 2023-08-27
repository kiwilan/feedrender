import { createRouter } from 'h3'
import { createRoute } from './router'
import root from './root'
import api from './api/index'
import apiRender from './api/render'
import apiParser from './api/parser'
import apiRegister from './api/register'
import apiLogin from './api/login'
import apiUser from './api/user'
import apiUsers from './api/users'
import apiDelete from './api/delete'

export const router = createRouter()
  .get('/', createRoute(root))
  .get('/api', createRoute(api))
  .get('/api/render', createRoute(apiRender))
  .get('/api/parser', createRoute(apiParser))
  .post('/api/register', createRoute(apiRegister))
  .post('/api/login', createRoute(apiLogin))
  .get('/api/user', createRoute(apiUser))
  .get('/api/users', createRoute(apiUsers))
  .get('/api/delete', createRoute(apiDelete))
