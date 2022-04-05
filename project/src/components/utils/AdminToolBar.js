import { useState } from "react";

import styled from "styled-components";
import Button from "./Button";
import SearchBox from "./SearchBox";
import UploadModal from "./AdminUploadModal";

// TODO: 검색조건 추가(제목, 채널명), 검색 기능 구현
export default function AdminToolBar() {
  const [upload, setUpload] = useState(false);
  const showUpload = () => setUpload(true);
  const closeUpload = () => setUpload(false);

  return (
    <>
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
            onClick={showUpload}
          />
        </BarRight>
      </ToolBar>
      {upload && <UploadModal closeUpload={closeUpload} />}
    </>
  );
}

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 1600px;
`;
const BarRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div: first-child {
    margin-right: 10px;
  }
`;
