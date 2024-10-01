import 'ts-node/register'

import express from 'express'
import dotenv from 'dotenv'
import routes from './routes/routes.ts'
// import bodyParser from 'body-parser'
import middleware from './utils/middleware.ts'

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

app.listen(process.env.PORT, () => {
  console.log('Server is up and running on port ' + process.env.PORT)
})
