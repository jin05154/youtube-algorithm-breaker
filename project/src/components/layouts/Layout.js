import Footer from "./Footer";
import Header from "./Header";
import { ReactComponent as Title } from "../../images/title.svg";

export default function Layout({ children, type }) {
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
          <Header />
          <div className="recommend-body">{children}</div>
          <Footer />
        </>
      )}
      {type === "onlyPC" && (
        <>
          <div id="pc-only-header"><Title /></div>
          <div className="pc-body">{children}</div>
        </>
      )}
    </div>
  );
}
