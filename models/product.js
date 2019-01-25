const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    image: {type: String, required: false, default: null},

});

// Export the model
module.exports = mongoose.model('Product', ProductSchema);