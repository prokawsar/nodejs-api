const product = require('./product'); // Imports routes for the products
const user = require('./user'); // Imports routes for the products

module.exports = (app)=>{
  app.use('/products', product)
  app.use('/user', user)
  //more endpoints goes here
}