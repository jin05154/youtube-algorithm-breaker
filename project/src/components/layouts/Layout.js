import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, type }) {
  return (
    <div className="App">
      <Header />
      {type === 'default' &&
        (<div className="default-body">
          {children}
        </div>)}
      {type === 'recommend' &&
        (<div className="recommend-body">
          {children}
        </div>)}
      <Footer />
    </div>
  );
}
