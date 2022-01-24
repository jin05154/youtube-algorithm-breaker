import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";

const DefaultLayout = ({ body }) => {
  return (
    <>
      <div className="App">
        <Header />
        <Body>{body}</Body>
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 250px);
  width: 100%;
`;
