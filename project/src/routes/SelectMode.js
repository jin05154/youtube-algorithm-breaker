import { useNavigate } from "react-router-dom";
import { isBrowser, isMobile } from 'react-device-detect';

import FadeIn from "react-fade-in";
import Layout from "../components/layouts/Layout";
import Button from "../components/utils/Button";

export default function SelectMode() {
  const navigate = useNavigate();
  const onClickRecommendBtn = () => {
    navigate("/recommend/survey");
  };
  const onClickRandomBtn = () => {
    navigate("/recommend/random");
  };
  return (
    <Layout type="default">
      <div id="select-mode" className="container">
        {isBrowser && (
          <>
            <FadeIn>
              <Button
                type="floating"
                theme="white"
                text="시청패턴 분석 후 맞춤형으로 추천 받기 🎯"
                width="500px"
                height="120px"
                margin="30px"
                onClick={onClickRecommendBtn}
              />
            </FadeIn>
            <FadeIn>
              <Button
                type="floating"
                theme="white"
                text="그냥 아무거나 빨리 추천 받기 🎲"
                width="500px"
                height="120px"
                margin="30px"
                onClick={onClickRandomBtn}
              />
            </FadeIn>
          </>
        )}
        {isMobile && (
          <>
            <FadeIn>
              <Button
                type="shadow"
                text={`시청패턴 분석 후 \n 맞춤형으로 추천 받기`}
                onClick={onClickRecommendBtn}
              />
            </FadeIn>
            <FadeIn>
              <Button
                type="shadow"
                text="그냥 아무거나 빨리 추천 받기"
                onClick={onClickRandomBtn}
              />
            </FadeIn>
          </>
        )}
      </div>
    </Layout>
  );
}
