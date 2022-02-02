require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mysqlConObj = require('./config/mysql');
const db = mysqlConObj.init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/data', (req, res) => {
    db.query(`SELECT * FROM areas`, (error, results) => {
        if (error) console.log(error);
        res.send(results);
    })
})

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})