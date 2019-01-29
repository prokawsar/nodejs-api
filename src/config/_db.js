const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

let mongoDB = process.env.MONGODB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true}, err => {
  if (err) throw err;
  console.log(`Successfully connected to database.`);
});

mongoose.Promise = global.Promise;
let db = mongoose.connection;