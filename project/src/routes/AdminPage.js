import { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";

import Layout from "../components/layouts/Layout";
import ListItem from "../components/utils/VideoListItem";
import { ReactComponent as TrashIcon } from "../images/trash.svg";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout type="onlyPC">
      <h1>ADMIN MODE 🧙‍♂️</h1>
      <div id="list-mode" className="container">
        <div>
          선택 | 썸네일 | 제목 | 채널명 | 업로드 날짜 | DB 등록 날짜 | 삭제
        </div>
        {videos.map((v, i) => (
          <ListItem key={i}>
            <div>
              <Checkbox
                sx={{
                  "&.Mui-checked": {
                    color: "var(--button-default-color-1)",
                  },
                }}
              />
            </div>
            <div className="small-img-wrapper">
              <img src={v.thumbnail} alt="" />
            </div>
            <div style={{ width: "530px" }} className="admin-video-title">
              <a href={v.url} target="_blank" rel="noreferrer">
                {v.video_title}
              </a>
            </div>
            <div style={{ width: "150px" }}>{v.channel_name}</div>
            <div style={{ width: "100px" }}>{v.publish_date}</div>
            <div style={{ width: "100px" }}>DB 등록 날짜</div>
            <div style={{ height: "24px" }} id="trash-btn">
              <TrashIcon />
            </div>
          </ListItem>
        ))}
      </div>
    </Layout>
  );
}
