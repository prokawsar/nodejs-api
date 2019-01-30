const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    username: {type: String, required: false},
    email: {type: String, required: true},
    password: {type: String, required: true},
    image: {type: String, required: false, default: null},
    created: {type: Date, default: new Date()} // need to fix this

});

// Export the model
module.exports = mongoose.model('User', UserSchema);