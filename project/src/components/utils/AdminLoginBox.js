import { useState } from "react";
import styled from "styled-components";

export default function AdminLoginBox() {
  const [inputID, setInputID] = useState("");
  const [inputPW, setInputPW] = useState("");

  const handleInputID = (e) => {
    setInputID(e.target.value);
  };
  const handleInputPW = (e) => {
    setInputPW(e.target.value);
  };
  const onClickLogin = () => {
    console.log("login");
  };
  return (
    <LoginBox>
      <h2>Login</h2>
      <LoginMenuWrap>
        <InputsWrap>
          <InnerWrap>
            <InputLabel>ID</InputLabel>
            <div>
              <input
                type="text"
                name="input_id"
                value={inputID}
                onChange={handleInputID}
              />
            </div>
          </InnerWrap>
          <InnerWrap>
            <InputLabel>PW</InputLabel>
            <div>
              <input
                type="password"
                name="input_pw"
                value={inputPW}
                onChange={handleInputPW}
              />
            </div>
          </InnerWrap>
        </InputsWrap>
        <div>
          <button type="button" onClick={onClickLogin}>
            LOGIN
          </button>
        </div>
      </LoginMenuWrap>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 400px;
  margin: 40px 0 0;
  border: 2px solid var(--black);
  border-radius: 4px;
`;
const LoginMenuWrap = styled.div`
  display: inherit;
  flex-direction: row;
  align-items: center;
`;
const InputsWrap = styled.div`
  display: inherit;
  flex-direction: column;
  padding: 0 10px 0 0;
`;
const InnerWrap = styled.div`
  display: inherit;
  flex-direction: row;
  div {
    margin: 5px 0;
  }
`;
const InputLabel = styled.div`
  width: 30px;
  display: inherit;
  justify-content: flex-start;
  font-weight: bold;
`;
