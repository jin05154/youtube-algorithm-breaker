import { useNavigate } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";

import FadeIn from "react-fade-in";
import Layout from "../components/layouts/Layout";
import Button from "../components/utils/Button";

export default function CustomMode() {
  const navigate = useNavigate();
  return (
    <Layout type="default">
      {isBrowser && (
        <>
          <h3>CUSTOM MODE 🎯</h3>
          <h2>당신의 성별은?</h2>
          <FadeIn>
            <Button
              type="floating"
              theme="white"
              text="🙋‍♂️ 남"
              width="380px"
              height="100px"
            />
          </FadeIn>
          <FadeIn>
            <Button
              type="floating"
              theme="white"
              text="🙋‍♀️ 여"
              width="380px"
              height="100px"
            />
          </FadeIn>
          <FadeIn>
            <Button
              type="floating"
              theme="white"
              text="🌈 기타"
              width="380px"
              height="100px"
              margin="30px"
            />
          </FadeIn>
        </>
      )}
      {isMobile && (
        <>
          <h3>CUSTOM MODE 🎯</h3>
          <h2>당신의 성별은?</h2>
          <FadeIn>
            <Button
              type="shadow"
              theme="white"
              text="🙋‍♂️ 남"
              width="380px"
              height="100px"
              margin="10px"
            />
          </FadeIn>
          <FadeIn>
            <Button
              type="shadow"
              theme="white"
              text="🙋‍♀️ 여"
              width="380px"
              height="100px"
              margin="10px"
            />
          </FadeIn>
          <FadeIn>
            <Button
              type="shadow"
              theme="white"
              text="🌈 기타"
              width="380px"
              height="100px"
              margin="10px"
            />
          </FadeIn>
        </>
      )}
    </Layout>
  );
}
