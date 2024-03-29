const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

const express = require('express');
const { PassThrough } = require('stream');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoute
app.use('/api', apiRoutes);

//  Default response for any other request (NOT FOUND)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});