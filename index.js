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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/products', product);

// success request handling
app.use((result, req, res, next) => {
  res.status(result.status || 200);
  res.json({
    message: "SUCCESS",
    internal_message: result.message,
    records: result
  })
})

// error handeling
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: "ERROR",
    internal_message: error.message
  })
})

app.listen(process.env.PORT, () => {
  console.log('Server is up and running on port ' + process.env.PORT);
});