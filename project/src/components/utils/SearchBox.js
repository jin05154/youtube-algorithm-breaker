import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

export default function SearchBox({ inputInfo, handleInfo }) {
  return (
    <Wrapper>
      <InputForm
        type="text"
        name="input_id"
        placeholder="검색 ..."
        value={inputInfo}
        onChange={handleInfo}
      />
      <StyledBox>
        <SearchIcon />
      </StyledBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const InputForm = styled.input`
  width: 240px;
  height: 42px;
  padding: 0 5px 0 12px;
  border: none;
  border-radius: 5px 0 0 5px;
  outline: none;
  background: var(--login-input-background);
  font-size: 15px;
`;
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 42px;
  padding: 0 10px;
  border: none;
  border-radius: 0 5px 5px 0;
  background: var(--login-input-background);
  cursor: pointer;
`;
