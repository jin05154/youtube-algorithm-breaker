require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8080
const cors = require('cors');
const mysqlConObj = require('./config/mysql');
const db = mysqlConObj.init();

app.use(cors());
app.use(express.json());

app.get('/api/video', (req, res) => {
    db.query(`SELECT * FROM videos`, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})