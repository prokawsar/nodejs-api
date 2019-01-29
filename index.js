const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const config = require('./src/config/config')
const middleware = require('./utils/middleware')
const routes = require('./src/routes/routes'); // Imports all routes

// initialize our express app
const app = express();

dotenv.config()

config.db()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// all routes here
routes(app)

// success request handling
app.use(middleware.successHandler)
// no route handeling
app.use(middleware.noRouteHandler)
// error handeling
app.use(middleware.errorHandler)

app.listen(process.env.PORT, () => {
  console.log('Server is up and running on port ' + process.env.PORT);
});