const productModel = require('../models/productModel')

//API to get all products
const getAllProducts = (req,res) => {
    console.log(req.body)
    productModel.getAllProducts((data) => {
        res.send(data)
    })  
}

//API to get product by id
const getProductById = (req, res) => {
    productModel.getProductById(id, (data) => {
    res.send(data)
    })
}

//API to create product
const createProduct = (req,res) => {
    console.log("first",req.body)
    productModel.createProduct(req.body,(data) => {
    console.log("second",data)
    res.status(200).send(data)
    })
}

//API to delete product
const deleteProduct = (req,res) => {
    productModel.deleteProduct(id, (data) => {
        res.send.json({
            message:"data deleted successfully"
        })
    })
}


//API to update product
const updateProduct = (req,res) => {
    productModel.updateProduct(id, req.body, () => {
    res.send.json({
        message:"data updated successfully"
    })
    })
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
}





