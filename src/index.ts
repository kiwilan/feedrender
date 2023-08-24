import { createApp } from 'h3'
import { router } from './router'

export const app = createApp()
app.use(router)
