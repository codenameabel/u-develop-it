const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your mysql username
    user: 'root',
    // Your mysql password
    password: 'th1znation',
    database: 'election'
});

module.exports = db;