const mysql = require('mysql2');

const express = require ('express');
const { PassThrough } = require('stream');

const PORT = process.env.PORT || 3001;
const app = express(); 

// Express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); 

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mysql username
        user: 'root',
        // Your mysql password
        password: 'th1znation',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

// GET all the candidates
// db.query(`SELECT * FROM candidates`, (err,rows) => { 
//     console.log(rows);
// });

// GET a single candidate 
// db.query(`SELECT * FROM candidates WHERE id = 10`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });  

// CREATE a candidate 
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
//              VALUES (?,?,?,?)`;
// const params = [ 1, 'Ronald', 'Firbank', 1];
// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

//  Default response for any other request (NOT FOUND)
app.use((req, res) => { 
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});