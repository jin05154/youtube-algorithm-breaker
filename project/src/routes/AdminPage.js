import { useState, useEffect } from "react";
import axios from "axios";

import PulseLoader from "react-spinners/PulseLoader";
import Layout from "../components/layouts/Layout";
import ToolBar from "../components/utils/AdminToolBar";
import ListRow from "../components/utils/VideoListRow";

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
      <div className="mode-name">
        <h1>ADMIN MODE 👷‍♀️</h1>
      </div>
      <ToolBar />
      {catchError && <span>에러가 발생했습니다.</span>}
      {loading && (
        <div className="admin-spinner">
          <PulseLoader color="var(--black)" size={15} margin={3} />
        </div>
      )}
      {dataExists && (
        <div id="list-mode" className="container">
          <ListRow type="top" />
          {videos.map((v, i) => (
            <ListRow type="content" video={v} key={i} />
          ))}
        </div>
      )}
    </Layout>
  );
}
