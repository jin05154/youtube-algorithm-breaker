import React, { useState, useEffect } from 'react';
import './style.css';

import { ReactComponent as SendOne } from './img/send_1.svg';
import { ReactComponent as SendTwo } from './img/send_2.svg';
import { ReactComponent as SendThree } from './img/send_3.svg';
import { ReactComponent as ReplyOne } from './img/reply_1.svg';

const Chats = () => {
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    useEffect(() => {
        setTimeout(function () {
            setShowOne(true)
        }, 500);
        setTimeout(function () {
            setShowTwo(true)
        }, 1400);
        setTimeout(function () {
            setShowThree(true)
        }, 2200);
        setTimeout(function () {
            setShowFour(true)
        }, 3000);
    }, [])
    return (
        <>
            <div id='bubble-1'>{showOne && <SendOne />}</div>
            <div id='bubble-2'>{showTwo && <SendTwo />}</div>
            <div id='bubble-3'>{showThree && <ReplyOne />}</div>
            <div id='bubble-4'>{showFour && <SendThree />}</div>
        </>
    );
}

const Header = () => {
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
                <div className='chat'>
                    <Chats />
                </div>
            </div>
        </>
    );
}

export default Header;