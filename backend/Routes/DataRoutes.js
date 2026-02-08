const RegisterModel = require('../models/RegisterModel')
const ProductModel = require('../models/ProductModel')
const CartModel = require('../models/CartModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Routes = require('express').Router()
require('dotenv').config

Routes.post('/Register', async (req, res) => {
    const {email, password} = req.body
    const hashedpassword = await bcrypt.hash(req.body.password, 10)
    if (!email || !{password:hashedpassword}){
        return res.send({message: 'User Information are Required!'})
    }
    else{
        const UserReg = await RegisterModel.findOne({email: email})
        if (UserReg === null){
            await RegisterModel.create({email, password:hashedpassword})
            res.send({message: 'User Register SuccessFully!'})
        }
        else{
            res.send({message: 'Already Have A Account Please Login!'})
        }
    }
})

Routes.post('/Login', async(req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.json('User Information are Required!')
    }else{
        const UserLogin = await RegisterModel.findOne({email: email})
        if (UserLogin === null){
            res.json("User Can't be Register,Please Register!")
        }else{
            const compareid = await bcrypt.compare(password, UserLogin.password)
            if (compareid === true) {
                    const payload = {
                        email: email,
                    }  
                    const jwtToken = jwt.sign(payload, 'MY_SECRET_TOKEN')
                    res.status(200)
                    res.send({message: 'Success',jwtToken, userId: UserLogin._id})
                }
            else {
                res.send('Invalid password')
            }
        }
    }
})

Routes.post('/product', async(req, res) => {
    const {itemId, itemName,imageUrl,category, price, quantity} = req.body
    const UserProduct = await ProductModel.create({itemId, itemName, imageUrl, category, price, quantity})
    return res.json(UserProduct)
})

Routes.get('/product', async(req, res) => {
    const GetProduct = await ProductModel.find({}) 
    return res.json(GetProduct)
})

Routes.get('/product/:id', async(req, res) => {
    const id = req.params.id
    const GetProductId = await ProductModel.findById({_id: id})
    return res.json(GetProductId) 
})

Routes.post('/Card/:id', async(req, res) => {
    const id = req.params.id 
    const PostCardId = await RegisterModel.findById({_id: id})
    if (PostCardId._id){
        const {id, itemId,itemName,imageUrl,category, price, itemQuantity} = req.body
        const PostCardDetails = await CartModel.create({id,itemId, itemName, itemQuantity,imageUrl, category, price}) 
        res.json(PostCardDetails)
    }
})

Routes.get('/Card/:id', async(req, res) => {
    const id = req.params.id 
    const PostCardId = await RegisterModel.findById({_id: id})
    if (PostCardId){
        const Ge = await CartModel.find({id: id})
        res.json(Ge)
    }
})

Routes.delete('/Card/:id', async(req, res) => {
    const id = req.params.id 
    const deleteItemcart = await CartModel.findByIdAndDelete({_id: id})
    res.json(deleteItemcart)
})

module.exports = Routes