import 'dotenv/config'

interface IDotenv {
  PORT: number
  HOST: string
  HTTPS: boolean
  BASE_URL: string
  IS_DEV: boolean
}

export class Dotenv {
  public static load(): IDotenv {
    // eslint-disable-next-line n/prefer-global/process
    const current = process

    let port = current.env.PORT ?? 3000
    port = Number(port)
    const host = current.env.HOST ?? 'localhost'
    const https = current.env.HTTPS === 'true'
    const prefix = https ? 'https' : 'http'
    const isDev = current.env.ENV === 'development'

    let baseURL = `${prefix}://${host}`
    if (isDev)
      baseURL = `${baseURL}:${port}`

    return {
      PORT: port,
      HOST: host,
      HTTPS: https,
      BASE_URL: baseURL,
      IS_DEV: isDev,
    }
  }
}
