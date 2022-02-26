import React from "react";

import { ReactComponent as Title } from "../../images/title.svg";
import { ReactComponent as TitleM } from "../../images/title_mobile.svg";

export default function Header({ mode }) {
  return (
    <div className="header">
      <div className="header-title">
        <div className="pc-header-title">
          <Title />
        </div>
        <div className="mobile-header-title">
          <TitleM />
        </div>
      </div>
      <div className="mode-name">
        <h1>{mode}</h1>
      </div>
    </div>
  );
}
