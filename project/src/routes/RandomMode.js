import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from "../components/layouts/DefaultLayout";

export default function RandomMode() {
    const [videos, setVideos] = useState([]);

    const fetchVideoInfo = async () => {
        axios.get('http://localhost:8080/api/video')
            .then((res) => setVideos(res.data));
    };

    useEffect(() => {
        fetchVideoInfo();
    }, []);

    return (
        <Layout>
            {videos.map((v, i) =>
                <div key={i}><h3>{v.video_url}</h3></div>)}
        </Layout>
    );
}