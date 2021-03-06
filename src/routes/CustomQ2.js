import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import FadeIn from "react-fade-in";
import Layout from "../components/layouts/Layout";
import Button from "../components/utils/Button";

export default function CustomTwo() {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [errExists, setErrExists] = useState(false);
  const handleAgeInput = (e) => {
    setAge(e.target.value);
  };
  const onClickBtn = () => {
    console.log(age);
    if (age !== "" && age > 0 && age < 120) {
      setErrExists(false);
      navigate("/recommend/custom/3");
    } else {
      setErrExists(true);
    }
  };
  
  return (
    <Layout
      type="question"
      mode="CUSTOM MODE π―"
      question="λΉμ μ λμ΄λ?"
      addition="(μλΉμ€ μ΄μ© κΆμ₯ λμ΄λ 14μΈ ~ 39μΈμλλ€.)"
    >
      <FadeIn>
        <div className="basic-wrap">
          <StyledInput>
            <InputForm
              type="number"
              min={14}
              max={120}
              onChange={handleAgeInput}
            />
            <InputUnit>
              <h3>μΈ</h3>
            </InputUnit>
          </StyledInput>
          {errExists && (
            <ErrorMessage>λμ΄λ₯Ό μ νν μλ ₯ν΄μ£ΌμΈμ.</ErrorMessage>
          )}
          <Button
            type="default"
            text="λ€μ"
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
const ErrorMessage = styled.p`
  margin-block-start: 0.7em;
  color: red;
`;
