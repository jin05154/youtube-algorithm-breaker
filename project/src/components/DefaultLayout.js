import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <div className="default-body">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
