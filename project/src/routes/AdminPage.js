import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layouts/Layout";
import ListItem from "../components/utils/VideoListItem";

export default function AdminPage() {
  const [videos, setVideos] = useState([]);

  const fetchVideoInfo = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/admin");
      setVideos(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideoInfo();
    if (!videos) return <span>데이터 없음</span>;
  }, []);

  return (
    <Layout type="default">
      <h1>ADMIN MODE 🧙‍♂️</h1>
      <div id="list-mode" className="container">
        {videos.map((v, i) => (
          <ListItem key={i}>
            <div>checkbox</div>
            <div className="small-img-wrapper">
              <img src={v.thumbnail} alt="" />
            </div>
            <div style={{ width: "27vw" }}>{v.video_title}</div>
            <div style={{ width: "8vw" }}>{v.channel_name}</div>
            <div>{v.publish_date}</div>
            <div>바로가기btn</div>
            <div>delete_btn</div>
          </ListItem>
        ))}
      </div>
    </Layout>
  );
}
