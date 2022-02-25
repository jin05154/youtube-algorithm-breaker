import { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";

import PulseLoader from "react-spinners/PulseLoader";
import Layout from "../components/layouts/Layout";
import ToolBar from "../components/utils/AdminToolBar";
import TopRow from "../components/utils/VideoListTopRow";
import ListItem from "../components/utils/VideoListItem";
import { ReactComponent as TrashIcon } from "../images/trash.svg";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [dataExists, setDataExists] = useState(false);
  const [catchError, caughtError] = useState(false);

  const fetchVideoInfo = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/admin");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout type="onlyPC">
      <h1>ADMIN MODE 👷‍♀️</h1>
      <ToolBar />
      {catchError && <span>에러가 발생했습니다.</span>}
      {loading && (
        <div className="admin-spinner">
          <PulseLoader color="var(--black)" size={15} margin={3} />
        </div>
      )}
      {dataExists && (
        <div id="list-mode" className="container">
          <TopRow />
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
              <div style={{ width: "100px" }}>{v.db_upload_date}</div>
              <div style={{ height: "24px" }} id="trash-btn" title="delete">
                <TrashIcon />
              </div>
            </ListItem>
          ))}
        </div>
      )}
    </Layout>
  );
}
