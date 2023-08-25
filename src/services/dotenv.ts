/* eslint-disable n/prefer-global/process */
import 'dotenv/config'

interface IDotenv {
  PORT: number
  HOST: string
  HTTPS: boolean
  BASE_URL: string
  IS_DEV: boolean
  NODE_ENV?: string
}

export class Dotenv {
  public static load(): IDotenv {
    let port = process.env.PORT ?? 3000
    port = Number(port)
    const host = process.env.HOST ?? '0.0.0.0'
    const https = process.env.HTTPS === 'true'
    const prefix = https ? 'https' : 'http'
    const isProduction = process.env.NODE_ENV === 'production'

    let baseURL = `${prefix}://${host}`
    if (!isProduction)
      baseURL = `${baseURL}:${port}`

    return {
      PORT: port,
      HOST: host,
      HTTPS: https,
      BASE_URL: baseURL,
      NODE_ENV: process.env.NODE_ENV,
      IS_DEV: !isProduction,
    }
  }
}
