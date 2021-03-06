import styled from "styled-components";
import InputForm from "../utils/LoginInputForm";

export default function LoginForm({
  inputID,
  inputPW,
  handleID,
  handlePW,
  errMsg,
  onSubmit,
}) {
  return (
    <LoginBox>
      <Greetings>
        <h1>LOGIN</h1>
        <h3>관리자 외 접근금지</h3>
      </Greetings>
      <LoginMenuWrap>
        <form onSubmit={onSubmit}>
          <InputsWrap>
            <InputForm type="ID" inputInfo={inputID} handleInfo={handleID} />
            <InputForm type="PW" inputInfo={inputPW} handleInfo={handlePW} />
          </InputsWrap>
          <div>
            <ErrorMessage>{errMsg}</ErrorMessage>
          </div>
          <div>
            <LoginButton type="submit">로그인</LoginButton>
          </div>
        </form>
      </LoginMenuWrap>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  padding: 0 0 20px 0;
  margin: 40px 0 0;
  background: var(--white);
  border: 1px solid var(--login-box-border);
  border-radius: 10px;
  h1 {
    margin-block-end: 0em;
  }
  h3 {
    margin-block-start: 0.6em;
    margin-block-end: 1.8em;
  }
`;
const LoginMenuWrap = styled.div`
  display: inherit;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const InputsWrap = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: center;
`;
const Greetings = styled.div`
  display: inherit;
  flex-direction: inherit;
  justify-content: flex-start;
  align-items: flex-start;
  width: 330px;
  h1 {
    margin-block-start: 1em;
  }
`;
const ErrorMessage = styled.p`
  margin-block-start: 0.7em;
  color: red;
`;
const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 50px;
  margin: 15px 0 0 0;
  border: none;
  border-radius: 5px;
  background: var(--button-default-color-1);
  color: var(--white);
  font-size: 20px;
  cursor: pointer;
`;
