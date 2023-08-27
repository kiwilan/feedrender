import { createApp } from 'h3'
import { router } from './routes'

// import { createUsersTable } from './services/database'
import './functions'

export const app = createApp()
app.use(router)

// createUsersTable()
// cron.schedule('*/15 * * * * *', () => {
//   consola.info('node-cron task (every 15 seconds)')
// })
