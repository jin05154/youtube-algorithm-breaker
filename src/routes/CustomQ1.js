import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";

import FadeIn from "react-fade-in";
import Layout from "../components/layouts/Layout";
import Button from "../components/utils/Button";

export default function CustomOne() {
  const navigate = useNavigate();
  const [pick, setPick] = useState("");
  const onClickChoiceBtn = () => {
    navigate("/recommend/custom/2");
  };

  useEffect(() => {
    if (pick !== "") onClickChoiceBtn();
  });

  return (
    <Layout type="question" mode="CUSTOM MODE π―" question="λΉμ μ μ±λ³μ?">
      {isBrowser && (
        <>
          <FadeIn>
            <Button
              type="floating"
              theme="white"
              text="πββοΈ λ¨"
              width="380px"
              height="100px"
              onClick={() => setPick("male")}
            />
          </FadeIn>
          <FadeIn>
            <Button
              type="floating"
              theme="white"
              text="πββοΈ μ¬"
              width="380px"
              height="100px"
              onClick={() => setPick("female")}
            />
          </FadeIn>
          <FadeIn>
            <Button
              type="floating"
              theme="white"
              text="π κΈ°ν"
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
          <FadeIn>
            <Button
              type="shadow"
              theme="white"
              text="πββοΈ λ¨"
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
              text="πββοΈ μ¬"
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
              text="π κΈ°ν"
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
