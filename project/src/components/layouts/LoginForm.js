import styled from "styled-components";
import FormInputItem from "../utils/FormInputItem";

export default function LoginForm({
  inputID,
  inputPW,
  handleID,
  handlePW,
  onSubmit,
}) {
  return (
    <LoginBox>
      <h1>LOGIN</h1>
      <form onSubmit={onSubmit}>
        <LoginMenuWrap>
          <InputsWrap>
            <FormInputItem
              type="ID"
              inputInfo={inputID}
              handleInfo={handleID}
            />
            <FormInputItem
              type="PW"
              inputInfo={inputPW}
              handleInfo={handlePW}
            />
          </InputsWrap>
          <div>
            <button type="submit">LOGIN</button>
          </div>
        </LoginMenuWrap>
      </form>
    </LoginBox>
  );
}

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 400px;
  margin: 40px 0 0;
  background: var(--white);
  border: 1px solid var(--login-box-border);
  border-radius: 10px;
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
  padding: 0 10px 0 0;
`;
