import styled from "styled-components";
import Button from "./Button";
import SearchBox from "./SearchBox";

export default function AdminToolBar({ onClickSearch, onClickUpload }) {
  return (
    <ToolBar>
      <Button
        type="default"
        text="삭제"
        width="66px"
        height="42px"
        fontSize="18px"
        margin="0"
      />
      <BarRight>
        <SearchBox />
        <Button
          type="default"
          text="업로드"
          width="112px"
          height="42px"
          fontSize="18px"
          margin="0"
        />
      </BarRight>
    </ToolBar>
  );
}

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 1250px;
`;
const BarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div: first-child {
    margin-right: 20px;
  }
`;
