import React from 'react';

import styled from 'styled-components';
import ChatIntro from '../components/ChatIntro';
import Button from '../components/Button';

const MainPage = () => {
    return (
        <div className='container'>
            <div className='top-content'>
                <ChatIntro />
            </div>
            <div className='detail'>
                <p>유튜브 추천영상, 더 이상 재미가 없나요?</p>
                <p>볼게 없어서 맨날 무한도전 클립만 돌려보고 계신가요?</p>
                <p>그렇다면 YAB이 직접 엄선하여 추천해드리는 영상들을 즐겨보세요! 😎</p>
            </div>
            <div><Button text={'추천 받아보기 👋'}/></div>
            <Link>FAQ</Link>
            <Link>Learn More</Link>
        </div>
    );
}

export default MainPage;

const Link = styled.span`
    font-size: 22px;
    font-weight: bold;
    padding: 5px 0;
    cursor: pointer;
`;