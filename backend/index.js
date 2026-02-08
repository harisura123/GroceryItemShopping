const express = require('express')
const cors = require('cors')
const colors = require('colors')
const {connection} = require('./db')
const Routes = require('./Routes/DataRoutes')
const app = express()
app.use(express.json())
app.use(cors())
require('dotenv').config
const port = process.env.PORT
app.use('/auth', Routes)
app.listen(port, async() => {
    try{
        await connection
        console.log(colors.bgYellow('Db is Connected Successfully'))
    }
    catch{
        console.log(colors.bgRed('Error in Db'))
    }
    console.log(colors.bgGreen(`Backend is Connected ${port}`))
})