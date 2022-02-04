import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from "../components/layouts/DefaultLayout";
import StyledUrl from '../components/StyledUrl';

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
                <div key={i}>
                    <img src={`http://img.youtube.com/vi/${v.video_url}/0.jpg`} width='200px' alt=''/>
                    <StyledUrl url={`https://youtu.be/${v.video_url}`}>{v.video_title}</StyledUrl>
                </div>)}
        </Layout>
    );
}