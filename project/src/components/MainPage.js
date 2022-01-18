import React from 'react';
import './style.css';

const MainPage = () => {
    return (
        <div className='container'>
            <div id='page1' className='page'>
                <div className='detail'>
                    <p>유튜브 추천영상, 더 이상 재미가 없나요?</p>
                    <p>볼게 없어서 맨날 무한도전 클립만 돌려보고 계신가요?</p>
                    <p>그렇다면 YAB이 직접 엄선하여 추천해드리는 채널의 영상들을 즐겨보세요! 😎</p>
                </div>
            </div>
            <div id='page2' className='page'>page2</div>
        </div>
    );
}

export default MainPage;