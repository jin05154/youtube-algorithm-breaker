import { useState, useEffect } from 'react';
import axios from 'axios';

import FadeIn from 'react-fade-in';
import SyncLoader from 'react-spinners/SyncLoader';
import Layout from "../components/layouts/Layout";
import ItemContainer from '../components/utils/ItemContainer';

export default function RandomMode() {
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);

    const fetchVideoInfo = async () => {
        try {
            const result = await axios.get('http://localhost:8080/api/video');
            setVideos(result.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchVideoInfo();
        if (!videos) return <span>데이터 없음</span>
    }, []);

    return (
        <Layout type='recommend'>
            {loading && <SyncLoader color='var(--black)' size={30} margin={5} />}
            {videos.map((v, i) =>
                <FadeIn key={i}>
                    <ItemContainer url={`https://youtu.be/${v.url}`}>
                        <div className="img-wrapper">
                            <img src={`http://img.youtube.com/vi/${v.url}/0.jpg`} alt='' />
                        </div>
                        <div className="vid-infos">
                            <h5>{v.video_title}</h5>
                            <p>{v.channel_name}</p>
                            <p>{v.playtime}</p>
                        </div>
                    </ItemContainer>
                </FadeIn>)}
        </Layout>
    );
}
