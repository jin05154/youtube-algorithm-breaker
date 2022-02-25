import { useState, useEffect } from "react";
import axios from "axios";

import FadeIn from "react-fade-in";
import SyncLoader from "react-spinners/SyncLoader";
import Layout from "../components/layouts/Layout";
import ItemContainer from "../components/utils/ItemContainer";

export default function RandomMode() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [dataExists, setDataExists] = useState(false);
  const [catchError, caughtError] = useState(false);

  const fetchVideoInfo = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/video");
      setVideos(result.data);
      setLoading(false);
      if (videos !== []) setDataExists(true);
    } catch (error) {
      caughtError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideoInfo();
    if (!videos) return <span>데이터 없음</span>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout type="recommend">
      <h1>RANDOM MODE 🎲</h1>
      {catchError && <span>에러가 발생했습니다.</span>}
      {loading && <SyncLoader color="var(--black)" size={20} margin={3} />}
      {dataExists &&
        videos.map((v, i) => (
          <FadeIn key={i}>
            <ItemContainer url={`https://youtu.be/${v.url}`}>
              <div className="img-wrapper">
                <img src={`http://img.youtube.com/vi/${v.url}/0.jpg`} alt="" />
              </div>
              <div className="vid-infos">
                <h5>{v.video_title}</h5>
                <p>{v.channel_name}</p>
                <p>{v.playtime}</p>
              </div>
            </ItemContainer>
          </FadeIn>
        ))}
    </Layout>
  );
}
