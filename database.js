let mysql = require("mysql");

let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((error)=>{
    if(error)throw error;
    console.log(`DB Connected`);
});

module.exports = connection;
