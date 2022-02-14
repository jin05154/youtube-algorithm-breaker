require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8080
const cors = require('cors');
const { default: axios } = require('axios');
const mysqlConObj = require('./config/mysql');
const db = mysqlConObj.init();

app.use(cors());
app.use(express.json());

app.get('/api/video', (req, res) => {
    var channels = [];
    db.query(`SELECT * FROM videos`, async (err, data) => {
        if (err) console.log(err);
        else {
            for (let i = 0; i < data.length; ++i) {
                let res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${data[i].video_url}&part=contentDetails&key=${process.env.YT_API_KEY}`);
                const sub = res.data.items[0].snippet
                const dur = res.data.items[0].contentDetails.duration
                channels.push({ "id": i, "url": data[i].video_url, "video_title": sub.title, "channel_name": sub.channelTitle, "playtime": dur });
            }
            res.send(channels);
        }
    })
})

// TODO: parse duration string


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/api/video`)
})