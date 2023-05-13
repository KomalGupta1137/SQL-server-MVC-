const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const app = express()
const PORT = 3000
const productRoutes = require('./routes/productRoutes')

//parse incoming requests with JSON Payloads
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));


app.use('/products', productRoutes)




//listen for all incoming requests
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})