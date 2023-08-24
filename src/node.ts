import { createServer } from 'node:http'
import { toNodeListener } from 'h3'
import { app } from './index'

console.error(`Listening on http://localhost:${process.env.PORT || 3000}`)

createServer(toNodeListener(app)).listen(process.env.PORT || 3000)
