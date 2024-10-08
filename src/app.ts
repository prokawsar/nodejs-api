import express from 'express'
import routes from './routes/routes'
import dotenv from 'dotenv'
import middleware from './middleware/system'

// initialize our express app
const app = express()

dotenv.config()

// config.db()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// middlewares
app.use(middleware.logger)

// all routes here
routes(app)
app.get('/', (req, res) => {
  res.json({
    message: 'GET request from index',
  })
})
// app.use(middleware.noRouteHandler)

export default app
