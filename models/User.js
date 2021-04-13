const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{type: String, required: false, max: 50},
    email:{type: String, required: true, max: 50},
    password:{type: String, required: true, max: 50},
    createdAt:{type: Date, defaut: Date.now}
})

module.exports = mongoose.model('User',userSchema);