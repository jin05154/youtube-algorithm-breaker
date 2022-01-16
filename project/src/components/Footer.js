import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>피드백은 언제나 환영입니다!</p>
            <div id="email">
                <p>건의사항이 있으시다면&nbsp;</p>
                <p>이메일</p>
                <p>로 연락주세요 :)</p>
            </div>
            <div id="copyright">
                <p>DESIGNED & CREATED BY Yumin Lee</p>
                <p>Copyright ©2022. All rights reserved </p>
            </div>
        </div>
    );
}

export default Footer;