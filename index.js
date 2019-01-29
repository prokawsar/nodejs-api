const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const middleware = require('./utils/middleware')
const product = require('./src/routes/product'); // Imports routes for the products

// initialize our express app
const app = express();

dotenv.config();

let mongoDB = process.env.MONGODB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true}, err => {
  if (err) throw err;
  console.log(`Successfully connected to database.`);
});

mongoose.Promise = global.Promise;
let db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/products', product);

// success request handling
app.use(middleware.successHandler)
// no route handeling
app.use(middleware.noRouteHandler)
// error handeling
app.use(middleware.errorHandler)

app.listen(process.env.PORT, () => {
  console.log('Server is up and running on port ' + process.env.PORT);
});