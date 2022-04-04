import { useNavigate } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { ReactComponent as Title } from "../../images/title.svg";

export default function Layout({ children, type, mode, question, addition }) {
  const history = useNavigate();
  const onClickLogo = () => history("/");
  return (
    <div className="App">
      {type === "default" && (
        <>
          <Header />
          <div className="default-body">{children}</div>
          <Footer />
        </>
      )}
      {type === "recommend" && (
        <>
          <Header mode={mode} />
          <div className="recommend-body">{children}</div>
          <Footer />
        </>
      )}
      {type === "question" && (
        <>
          <Header mode={mode} />
          <div className="question-wrapper">
            <h2>{question}</h2>
            <p>{addition}</p>
            <div className="question-body">{children}</div>
          </div>
          <Footer />
        </>
      )}
      {type === "simple" && (
        <>
          <Header />
          <div className="simple-body">{children}</div>
          <Footer />
        </>
      )}
      {type === "onlyPC" && (
        <div className="pc-layout">
          <div className="pc-only-header">
            <div className="header-title">
              <Title onClick={onClickLogo} />
            </div>
            <h3>{mode}</h3>
          </div>
          <div className="pc-body">{children}</div>
        </div>
      )}
    </div>
  );
}
