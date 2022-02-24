require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { default: axios } = require("axios");
const mysqlConObj = require("./config/mysql");
const db = mysqlConObj.init();
var ytDurationFormat = require("youtube-duration-format");

app.use(cors());
app.use(express.json());

const allQuery = `SELECT * FROM videos`;
const randQuery = `SELECT * FROM videos AS t1 JOIN 
(SELECT video_url FROM videos ORDER BY RAND() LIMIT 5) AS t2 ON t1.video_url=t2.video_url`;

app.get("/api/admin", (req, res) => {
  var videos = [];
  db.query(allQuery, async (err, data) => {
    if (err) console.log(err);
    else {
      for (let i = 0; i < data.length; ++i) {
        let res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${data[i].video_url}&part=contentDetails&key=${process.env.YT_API_KEY}`
        );
        const sub = res.data.items[0].snippet;
        videos.push({
          id: i,
          url: `https://youtu.be/${data[i].video_url}`,
          thumbnail: `http://img.youtube.com/vi/${data[i].video_url}/0.jpg`,
          video_title: sub.title,
          channel_name: sub.channelTitle,
          publish_date: sub.publishedAt.substring(0, 10)
        });
      }
      res.send(videos);
    }
  })
});

app.get("/api/video", (req, res) => {
  var channels = [];
  db.query(randQuery, async (err, data) => {
    if (err) console.log(err);
    else {
      for (let i = 0; i < data.length; ++i) {
        let res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=${data[i].video_url}&part=contentDetails&key=${process.env.YT_API_KEY}`
        );
        const sub = res.data.items[0].snippet;
        const dur = res.data.items[0].contentDetails.duration;
        channels.push({
          id: i,
          url: data[i].video_url,
          video_title: sub.title,
          channel_name: sub.channelTitle,
          playtime: ytDurationFormat(dur),
        });
      }
      res.send(channels);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}/api/video`);
});
