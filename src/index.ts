import { createApp } from 'h3'
import { router } from './router'
import { Dotenv } from './services'

export const app = createApp()
app.use(router)
