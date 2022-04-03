import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import FadeIn from "react-fade-in";
import Layout from "../components/layouts/Layout";
import Button from "../components/utils/Button";

export default function CustomTwo() {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const handleAgeInput = (e) => {
    setAge(e.target.value);
  };
  const onClickBtn = () => {
    console.log(age);
    navigate("/recommend/custom/3");
  };
  // TODO: 나이 입력 blank 예외처리, 입력 가능한 나이 범위 표시하기
  return (
    <Layout type="question" mode="CUSTOM MODE 🎯" question="당신의 나이는?">
      <FadeIn>
        <div className="basic-wrap">
          <StyledInput>
            <InputForm
              type="number"
              min={10}
              max={39}
              onChange={handleAgeInput}
            />
            <InputUnit>
              <h3>세</h3>
            </InputUnit>
          </StyledInput>
          <Button
            type="default"
            text="다음"
            width="100px"
            height="50px"
            onClick={onClickBtn}
          />
        </div>
      </FadeIn>
    </Layout>
  );
}

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 13px 0;
`;
const InputForm = styled.input`
  width: 124px;
  height: 50px;
  padding: 0 8px;
  border: 1px solid var(--black);
  border-radius: 5px;
  outline: none;
  background: var(--login-input-background);
  font-size: 15px;
  &:focus {
    border: 1px solid var(--login-input-background);
    box-shadow: 0px 0px 4px var(--button-default-color-1);
  }
`;
const InputUnit = styled.div`
  padding: 10px;
`;
