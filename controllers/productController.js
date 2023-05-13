const productModel = require('../models/productModel')

//API to get all products
const getAllProducts = (req,res) => {
    productModel.getAllProducts()
}

//API to get product ny id
const getProductById = (req, res) => {
    productModel.getProductById()
}

//API to create product
const createProduct = (req,res) => {
    productModel.createProduct()
}

//API to delete product
const deleteProduct = (req,res) => {
    productModel.deleteProduct()
}

//API to update product
const updateProduct = (req,res) => {
    productModel.updateProduct()
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
}





