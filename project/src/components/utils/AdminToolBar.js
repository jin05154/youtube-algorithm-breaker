import styled from "styled-components";
import { ReactComponent as UploadIcon } from "../../images/upload.svg";

export default function AdminToolBar({ onClickSearch, onClickUpload }) {
  return (
    <ToolBar>
      <div>검색창</div>
      <div style={{ height: "50px" }} id="trash-btn" title="upload">
        <UploadIcon />
      </div>
    </ToolBar>
  );
}

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  min-width: 1250px;
  div: first-child {
    margin-right: 20px;
  }
`;
