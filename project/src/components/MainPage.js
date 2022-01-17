import React from 'react';
import './App.css';

function Body() {
    return (
        <div className='container'>
            <div id='page1' class='page'>page1</div>
            <div id='page2' class='page'>
                <div className='detail'>
                    <p>유튜브 추천영상, 더 이상 재미가 없나요?</p>
                    <p>색다르고 새로운 재미가 필요한가요?</p>
                    <p>그렇다면 YAB이 추천해드리는 채널의 영상들을 즐겨보세요! 😎</p>
                </div>
            </div>
            <div id='page3' class='page'>page3</div>
        </div>
    );
}

export default Body;