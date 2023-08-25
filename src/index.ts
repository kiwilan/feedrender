import { createApp } from 'h3'
import { router } from './router'
import { Dotenv } from './services'

const dotenv = Dotenv.load()
console.error(dotenv)

export const app = createApp()
app.use(router)
