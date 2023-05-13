const db = require('../db')

function getAllProducts(callback){
    const query = 'SELECT * FROM Products'
    db.query(query, (error, results) => {
        if (error) throw error
        callback(results)

    })
} 

function getProductById(id, callback){
    const query = 'SELECT * FROM Products WHERE ProductId = ?'
    db.query(query,id, (error,results) => {
        if(error) throw error
        callback(results[0])
    })
}

function createProduct(data, callback){
    const query = 'INSERT INTO Products(productId, Name, Category,Price) VALUES(?, ?, ?, ?)'
    db.query(query,data, (error, results) => {
        if(error) throw error
        callback(results.insertId)

    })
}

function deleteProduct(id, callback){
    const query = 'DELETE FROM Products WHERE ProductId = ?'
    db.query(query, id , (error) => {
        if(error) throw error
        callback()
    })
}

function updateProduct(id,data, callback){
    const query = 'UPDATE Products  SET Name = ?,  Category = ?,  Price = ? WHERE ProductId = ? ' 
    db.query(query,[data, id] ,(error, result) => {
        if(error) throw error
        callback()

    })
}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
}