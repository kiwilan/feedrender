'use strict'

import type { H3Event } from 'h3'
import { createError, sendError } from 'h3'
import { Dotenv } from './services'

globalThis.dotenv = function dotenv() {
  return Dotenv.load()
}

globalThis.error = function error(event: H3Event, message: any, statusCode: number = 500) {
  sendError(event, createError({
    statusCode,
    statusMessage: JSON.stringify(message),
    data: message,
  }))
  console.error(message)
}
