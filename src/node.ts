import { createServer } from 'node:http'
import { toNodeListener } from 'h3'
import { consola } from 'consola'
import { colors } from 'consola/utils'
import { app } from './index'

const dotenv = globalThis.dotenv()

consola.log('')
consola.info('Starting server...')

createServer(toNodeListener(app)).listen(dotenv.PORT)

let env = colors.yellow(dotenv.ENV)
if (dotenv.ENV === 'production')
  env = colors.red(dotenv.ENV)

consola.success(`Local server: ${colors.cyanBright(dotenv.baseURL)}`)
consola.success(`Environment: ${env}`)
consola.success(`Port: ${colors.cyanBright(dotenv.PORT)}`)
consola.log('')
