import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from "../components/layouts/Layout";
import ItemContainer from '../components/ItemContainer';

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
        <Layout type='recommend'>
            {videos.map((v, i) =>
                <div key={i}>
                    <ItemContainer url={`https://youtu.be/${v.video_url}`}>
                        <div className="img-wrapper">
                            <img src={`http://img.youtube.com/vi/${v.video_url}/0.jpg`} alt='' />
                        </div>
                        <div className="vid-infos">
                            <h5>{v.video_title}</h5>
                            <p>{v.channel_name}</p>
                            <p>{v.playtime}</p>
                        </div>
                    </ItemContainer>
                </div>)}
        </Layout>
    );
}
