import 'ts-node/register'

import express from 'express'
import dotenv from 'dotenv'
import config from './config/config.ts'
import routes from './routes/routes.ts'
import bodyParser from 'body-parser'
// import middleware from '../utils/middleware'

// initialize our express app
const app = express()

dotenv.config()

// config.db()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// all routes here
routes(app)

// success request handling
// app.use(middleware.successHandler)
// no route handeling
// app.use(middleware.noRouteHandler)
// error handeling
// app.use(middleware.errorHandler)
app.get('/', (req, res) => {
  res.send('WORKING')
})
app.listen(process.env.PORT, () => {
  console.log('Server is up and running on port ' + process.env.PORT)
})
