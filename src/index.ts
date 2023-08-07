import express, { type Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { router } from './routes'

// import { logger } from './utils/logger'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.text())
app.use(express.json({ type: 'application/json', limit: '10kb' }))

app.use(morgan('tiny'))
app.use(express.static('public'))

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))

// Routes
app.use('/', router)

const port = process.env.PORT ?? 5000

// Service
app.listen(port, () => { console.info(`🚀 Server ready at: http://localhost:${port}}`) })

export default app
