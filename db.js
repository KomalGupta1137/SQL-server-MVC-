const mysql = require('mysql')

const connection = mysql.createConnection({
    user:'root',
    password:'Mysql@1137',
    host:'localhost',
    database:'products'

})

//To check wether our application is connected to the databse or not
connection.connect((err) => {
    if(err) {
        console.log("App is not connected to the database")
    }else{
        console.log("App is connected to  the database")
    }
})

module.exports = connection;