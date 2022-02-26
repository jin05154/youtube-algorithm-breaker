import Footer from "./Footer";
import Header from "./Header";
import { ReactComponent as Title } from "../../images/title.svg";

export default function Layout({ children, type, mode }) {
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
      {type === "onlyPC" && (
        <div className="pc-layout">
          <div className="pc-only-header">
            <Title />
          </div>
          <div className="mode-name">
            <h1>{mode}</h1>
          </div>
          <div className="pc-body">{children}</div>
        </div>
      )}
    </div>
  );
}
