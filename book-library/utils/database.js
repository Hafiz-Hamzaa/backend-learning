const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'database',
    database: 'book_library'
}).promise();

module.exports = pool;
