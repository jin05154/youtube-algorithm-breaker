import styled from "styled-components";

export default function VideoListTopRow() {
  return (
    <TopRow>
      <div style={{ width: "42px" }}>선택</div>
      <div style={{ width: "150px" }}>썸네일</div>
      <div style={{ width: "530px" }}>제목</div>
      <div style={{ width: "150px" }}>채널명</div>
      <div style={{ width: "100px" }}>업로드 날짜</div>
      <div style={{ width: "100px" }}>DB 등록 날짜</div>
      <div style={{ height: "24px" }}>삭제</div>
    </TopRow>
  );
}

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1250px;
  height: 50px;
  background-color: var(--admin-top-row);
  div {
    display: flex;
    justify-content: center;
    margin: 0 7px;
  }
  div: nth-child(3) {
    margin-right: 10px;
  }
  div: nth-child(4) {
    margin-right: 28px;
  }
  div: nth-child(6) {
    margin-right: 10px;
  }
`;
