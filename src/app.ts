import express from 'express'
import routes from './routes/routes'
import dotenv from 'dotenv'
import middleware from './middleware/system'
import { getAllUsers } from './queries/select'

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// middlewares
app.use(middleware.logger)

// all routes here
routes(app)
app.get('/', async (req, res) => {
  const result = await getAllUsers()
  res.json({
    message: 'GET request from index',
    result,
  })
})
// app.use(middleware.noRouteHandler)

export default app
