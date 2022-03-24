import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Title } from "../../images/title.svg";
import { ReactComponent as TitleM } from "../../images/title_mobile.svg";

export default function Header({ mode }) {
  const history = useNavigate();
  const onClickLogo = () => history("/");
  return (
    <>
      <div className="header">
        <div className="header-title" onClick={onClickLogo}>
          <div className="pc-header-title">
            <Title />
          </div>
          <div className="mobile-header-title">
            <TitleM />
          </div>
        </div>
      </div>
      <div className="header-mode-name">
        <h2>{mode}</h2>
      </div>
    </>
  );
}
