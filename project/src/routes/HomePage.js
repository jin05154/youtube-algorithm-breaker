import { useNavigate } from "react-router-dom";

import Layout from "../components/layouts/Layout";
import ChatIntro from "../components/design/ChatIntro";

import Button from "../components/utils/Button";
import StyledLink from "../components/utils/StyledLink";

export default function HomePage() {
  const navigate = useNavigate();
  const onClickMainBtn = () => {
    navigate("/recommend");
  };
  return (
    <Layout type="default">
      <div className="container">
        <div className="top-content">
          <ChatIntro />
        </div>
        <div className="detail">
          <p>유튜브 추천영상, 더 이상 재미가 없나요?</p>
          <p>볼게 없어서 맨날 무한도전 클립만 돌려보고 계신가요?</p>
          <div id="last-detail">
            <p>그렇다면 TAB이 직접 엄선하여&nbsp;</p>
            <p>추천해드리는 영상들을 즐겨보세요!</p>
          </div>
          <div id="main-btn">
            <Button
              theme="pink"
              text="추천 받아보기 👋"
              onClick={onClickMainBtn}
            />
          </div>
        </div>
        <StyledLink link={"faq"}>FAQ</StyledLink>
        <StyledLink link={"learn-more"}>Learn More</StyledLink>
        <StyledLink link={"admin"}>Admin</StyledLink>
      </div>
    </Layout>
  );
}
