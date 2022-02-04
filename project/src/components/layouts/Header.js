import React from 'react';

import { ReactComponent as Title } from "../../images/title.svg";
import { ReactComponent as TitleM } from "../../images/title_mobile.svg";

const Header = () => {
    return (
        <div className='header'>
            <div className='pc-header'><Title /></div>
            <div className='mobile-header'><TitleM /></div>
        </div>
    );
}

export default Header;