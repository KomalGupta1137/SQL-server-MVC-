const db = require("../db");

function getAllProducts(callback) {
  const query = "SELECT * FROM Products";
  db.query(query, (error, results) => {
    if (error) throw error;
    callback(results);
  });
}


function getProductById(id, callback) {
  const query = "SELECT * FROM Products WHERE ProductId = ?";
  db.query(query, [id], (error, results) => {
    if (error) throw error;
    callback(results[0]);
  });
}


function createProduct(record, callback) {
  //destructuring the record
  const { productId, Name, Category, Price } = record;
  const query =
    "INSERT INTO Products(productId, Name, Category,Price) values(?, ?, ?, ?)";
  db.query(query, [productId, Name, Category, Price], (error, results) => {
    if (error) {
      throw error;
    }
    callback(results);
  });
}


function deleteProduct(id, callback) {
  const query = "DELETE FROM Products WHERE ProductId = ?";
  db.query(query, [id], (error) => {
    if (error) throw error;
    callback();
  });
}


function updateProduct(id, record, callback) {
  const { productId, Name, Category, Price } = record;
  const query =
    "UPDATE Products  SET Name = ?,  Category = ?,  Price = ? WHERE ProductId = ? ";
  db.query(query, [productId, Name, Category, Price, id], (error, result) => {
    if (error) throw error;
    callback();
  });
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
