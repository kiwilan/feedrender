import { createApp } from 'h3'
import { router } from './routes'
import './functions'

export const app = createApp()
app.use(router)
