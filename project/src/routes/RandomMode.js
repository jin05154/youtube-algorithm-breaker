import { useState, useEffect } from "react";
import { isBrowser, isMobile } from 'react-device-detect';
import axios from "axios";

import FadeIn from "react-fade-in";
import SyncLoader from "react-spinners/SyncLoader";
import Layout from "../components/layouts/Layout";
import BrowserContainer from "../components/utils/ItemContainerBrowser";
import MobileContainer from "../components/utils/ItemContainerMobile";
import Button from "../components/utils/Button";

export default function RandomMode() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [dataExists, setDataExists] = useState(false);
  const [catchError, caughtError] = useState(false);

  const fetchVideoInfo = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_SERVER_API}/api/video`
      );
      setVideos(result.data);
      if (videos !== []) setDataExists(true);
    } catch (error) {
      caughtError(true);
      console.log(error);
    }
    setLoading(false);
  };

  const refreshList = () => {
    setDataExists(false);
    setLoading(true);
    fetchVideoInfo();
  }

  useEffect(() => {
    fetchVideoInfo();
    if (!videos) return <span>데이터 없음</span>;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout type="recommend" mode="RANDOM MODE 🎲">
      {catchError && <span>에러가 발생했습니다.</span>}
      {loading && <SyncLoader color="var(--black)" size={20} margin={3} />}
      {dataExists &&
        isBrowser &&
        videos.map((v, i) => (
          <FadeIn key={i}>
            <BrowserContainer url={`https://youtu.be/${v.url}`}>
              <div className="img-wrapper">
                <img
                  src={`http://img.youtube.com/vi/${v.url}/hqdefault.jpg`}
                  alt="영상 불러오기 실패"
                />
                <div>{v.playtime}</div>
              </div>
              <div className="vid-infos">
                <h5>{v.video_title}</h5>
                <div className="channel-info">
                  <div className="vid-info-avatar">
                    <img src={v.channel_art} alt={v.channel_name} />
                  </div>
                  <p>{v.channel_name}</p>
                </div>
                <p>{v.publish_date}</p>
              </div>
            </BrowserContainer>
          </FadeIn>
        ))}
      {dataExists &&
        isMobile &&
        videos.map((v, i) => (
          <FadeIn key={i}>
            <MobileContainer
              url={`https://youtu.be/${v.url}`}
              img={`http://img.youtube.com/vi/${v.url}/hqdefault.jpg`}
              title={v.video_title}
              channel={v.channel_name}
              avatar={v.channel_art}
              playtime={v.playtime}
              date={v.publish_date}
            />
          </FadeIn>
        ))}
      {dataExists && (
        <Button
          theme="pink"
          text="새로고침"
          margin="10px"
          onClick={refreshList}
        />
      )}
    </Layout>
  );
}
