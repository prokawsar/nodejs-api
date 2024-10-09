import express from 'express'
import routes from './routes/routes'
import dotenv from 'dotenv'
import middleware from './middleware/system'
import neon_sql from './config/neondb'

dotenv.config()
// initialize our express app
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// middlewares
app.use(middleware.logger)

// all routes here
routes(app)
app.get('/', async (req, res) => {
  const result = await neon_sql`SELECT version()`
  const { version } = result[0]

  res.json({
    message: 'GET request from index',
    version,
  })
})
// app.use(middleware.noRouteHandler)

export default app
