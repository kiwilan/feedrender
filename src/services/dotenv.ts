import 'dotenv/config'

export interface IDotenv {
  PORT: number
  HOST: string
  HTTPS: boolean
  ENV: 'development' | 'production' | 'test'
  TOKEN: string
  SUPABASE_URL: string
  SUPABASE_KEY: string
  NODE_ENV?: string
  /**
   * Full URL of the API, like `http://localhost:3000`.
   * On production, it's just `http://localhost`.
   */
  baseURL: string
  isDev: boolean
}

export class Dotenv {
  public static load(): IDotenv {
    let port = process.env.PORT ?? 3000
    port = Number(port)

    const env = process.env.ENV as 'development' | 'production' | 'test'
    let nodeEnv = process.env.NODE_ENV
    nodeEnv = env

    const host = process.env.HOST ?? '0.0.0.0'
    const https = process.env.HTTPS === 'true'
    const prefix = https ? 'https' : 'http'
    const isProduction = nodeEnv === 'production'

    let baseURL = `${prefix}://${host}`
    if (!isProduction)
      baseURL = `${baseURL}:${port}`

    return {
      PORT: port,
      HOST: host,
      HTTPS: https,
      ENV: env,
      TOKEN: process.env.TOKEN ?? '123456789',
      SUPABASE_URL: process.env.SUPABASE_URL ?? '',
      SUPABASE_KEY: process.env.SUPABASE_KEY ?? '',
      baseURL,
      NODE_ENV: process.env.NODE_ENV,
      isDev: !isProduction,
    }
  }
}
