'use strict'

import type { H3Event } from 'h3'
import { createError, readMultipartFormData, sendError } from 'h3'
import { Dotenv } from './services'

globalThis.dotenv = function dotenv() {
  return Dotenv.load()
}

globalThis.error = function error(event: H3Event, message: any, statusCode: number = 500) {
  sendError(event, createError({
    statusCode,
    statusMessage: typeof message === 'string' ? message : JSON.stringify(message),
    data: message,
  }))
  console.error(message)
}

globalThis.parseBody = async function parseBody<T>(event: H3Event): Promise<T> {
  const body = await readMultipartFormData(event)
  const data: T = {} as T
  body?.forEach((el) => {
    if (el.name)
      data[el.name] = el.data.toString()
  })
  return data
}
