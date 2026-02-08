const mongoose = require('mongoose')
const ProductGrocery = new mongoose.Schema({
    itemId: String,
    itemName: String,
    imageUrl: String,
    category: String,
    price: String,
    quantity: String
})

const ProductModels = mongoose.model('ProductGrocery', ProductGrocery)

module.exports = ProductModels