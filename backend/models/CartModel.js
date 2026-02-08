const mongoose = require('mongoose')
const CartDetails = new mongoose.Schema({
    itemId: String,
    itemName: String,
    imageUrl: String,
    category: String,
    price: String,
    id: String,
    itemQuantity: Number,
    itemId: String
})

const CartModel = mongoose.model('CartDetails', CartDetails)

module.exports = CartModel