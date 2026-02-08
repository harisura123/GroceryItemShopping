const mongoose = require('mongoose')
const GroceryRegister = new mongoose.Schema({
    email: String,
    password: String
})

const RegisterModels = mongoose.model('GroceryRegister', GroceryRegister)

module.exports = RegisterModels