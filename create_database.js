const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mayuri@123",
    database: "Crud_data"
})

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     db.query("CREATE DATABASE Crud_data", function(err, result) {
//         if (err) throw err;
//         console.log("Database created");
//     });`
// });


// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE Item (id INT AUTO_INCREMENT PRIMARY KEY,Title VARCHAR(320) NOT NULL,Discription VARCHAR(200) NOT NULL)"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })
