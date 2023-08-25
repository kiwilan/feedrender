/* eslint-disable n/prefer-global/process */
import { createServer } from 'node:http'
import { toNodeListener } from 'h3'
import { app } from './index'

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
const isDev = process.env.NODE_ENV === 'development'
let url = `${host}`
if (isDev)
  url += `:${port}`

console.error(`Listen on http://${url}`)

createServer(toNodeListener(app)).listen(port)
