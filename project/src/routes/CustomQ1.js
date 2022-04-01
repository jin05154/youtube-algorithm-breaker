import { useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";

import FadeIn from "react-fade-in";
import Layout from "../components/layouts/Layout";
import Button from "../components/utils/Button";

export default function CustomOne() {
  const [pick, setPick] = useState("");

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
              onClick={() => setPick("male")}
            />
          </FadeIn>
          <FadeIn>
            <Button
              type="floating"
              theme="white"
              text="🙋‍♀️ 여"
              width="380px"
              height="100px"
              onClick={() => setPick("female")}
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
              onClick={() => setPick("lgbtq")}
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
              onClick={() => setPick("male")}
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
              onClick={() => setPick("female")}
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
              onClick={() => setPick("lgbtq")}
            />
          </FadeIn>
        </>
      )}
    </Layout>
  );
}
