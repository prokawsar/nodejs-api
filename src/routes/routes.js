const product = require('./product'); // Imports routes for the products

module.exports = (app)=>{
  app.use('/products', product)
  //more endpoints goes here
}