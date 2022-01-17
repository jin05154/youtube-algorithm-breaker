import React from 'react';
import './Header.css';

function Header() {
    return (
        <>
            <div className='header'>
                <div className='title'>
                    <h1>Y</h1>
                    <h1>ouTube&nbsp;</h1>
                    <h1>A</h1>
                    <h1>lgorithm&nbsp;</h1>
                    <h1>B</h1>
                    <h1>reaker</h1>
                </div>
                <div className='detail'>
                    <p>유튜브 추천영상, 더 이상 재미가 없나요?</p>
                    <p>색다르고 새로운 재미가 필요한가요?</p>
                    <p>그렇다면 YAB이 추천해드리는 채널의 영상들을 즐겨보세요! 😎</p>
                </div>
            </div>
        </>
    );
}

export default Header;