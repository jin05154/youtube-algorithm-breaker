import styled from "styled-components";
import { ReactComponent as UsernameIcon } from "../../images/username.svg";
import { ReactComponent as PasswordIcon } from "../../images/password.svg";

export default function FormInputItem({ type, inputInfo, handleInfo }) {
  return (
    <Wrapper>
      {type === "ID" && (
        <>
          <StyledBox>
            <UsernameIcon />
          </StyledBox>
          <InputForm
            type="text"
            name="input_id"
            placeholder="아이디"
            value={inputInfo}
            onChange={handleInfo}
          />
        </>
      )}
      {type === "PW" && (
        <>
          <StyledBox>
            <PasswordIcon />
          </StyledBox>
          <InputForm
            type="text"
            name="input_id"
            placeholder="비밀번호"
            value={inputInfo}
            onChange={handleInfo}
          />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 23px 0;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 50px;
  padding: 0 10px;
  border: none;
  border-radius: 5px 0 0 5px;
  background: var(--login-input-background);
`;
const InputForm = styled.input`
  width: 270px;
  height: 50px;
  padding: 0 5px;
  border: none;
  border-radius: 0 5px 5px 0;
  outline: none;
  background: var(--login-input-background);
  font-size: 15px;
`;
