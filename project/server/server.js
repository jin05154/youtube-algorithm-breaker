require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080
const cors = require('cors');
const mysqlConObj = require('./config/mysql');
const db = mysqlConObj.init();

app.use(express.json());
app.use(cors());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

// app.get('/', (req, res) => {
//     db.query(`SELECT * FROM videos`, (error, results) => {
//         if (error) console.log(error);
//         res.send(results);
//     })
// })

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})