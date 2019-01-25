const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const product = require('./routes/product'); // Imports routes for the products

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

app.use((req, res, next) => {
  bodyParser.json()
  next()
});

app.use((req, res, next) => {
  bodyParser.urlencoded({
    extended: false
  })
  next()
})

app.use('/products', product);

app.listen(process.env.PORT, () => {
  console.log('Server is up and running on port ' + process.env.PORT);
});