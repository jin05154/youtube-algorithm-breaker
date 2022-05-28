import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

// TODO: 카테고리랑 나이대 정보 나타나도록 표 구성 수정
export default function VideoListRow({ type, video }) {
  const onClickTitle = () => window.open(video.url, "_blank");
  return (
    <>
      {type === "content" && (
        <ContentRow>
          <div style={{ width: "30px" }}>
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "var(--button-default-color-1)",
                },
              }}
            />
          </div>
          <div className="admin-click-to-watch" onClick={onClickTitle}>
            <div className="small-img-wrapper">
              <img src={video.thumbnail} alt="" />
            </div>
            <div style={{ width: "530px", fontSize: "1.05em" }}>
              {video.video_title}
            </div>
          </div>
          <div style={{ width: "150px" }}>{video.channel_name}</div>
          <div style={{ width: "130px" }}>{video.first_category}</div>
          <div style={{ width: "130px" }}>{video.second_category}</div>
          <div style={{ width: "50px" }}>{video.age}</div>
          <div style={{ width: "50px" }}>{video.sex}</div>
          <div style={{ width: "100px" }}>{video.publish_date}</div>
          <div style={{ width: "100px" }}>{video.db_upload_date}</div>
        </ContentRow>
      )}
      {type === "top" && (
        <TopRow>
          <div style={{ width: "42px" }}>
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "var(--button-default-color-1)",
                },
              }}
            />
          </div>
          <div style={{ width: "150px" }}>썸네일</div>
          <div style={{ width: "530px" }}>제목</div>
          <div style={{ width: "150px" }}>채널명</div>
          <div style={{ width: "130px" }}>카테고리</div>
          <div style={{ width: "130px" }}>세부분류</div>
          <div style={{ width: "50px" }}>나이</div>
          <div style={{ width: "50px" }}>성별</div>
          <div style={{ width: "100px" }}>업로드 날짜</div>
          <div style={{ width: "100px" }}>DB 등록 날짜</div>
        </TopRow>
      )}
    </>
  );
}

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1600px;
  word-break: break-all;
  align-items: center;
  border-top: 1px solid var(--black);
  div {
    margin: 0 7px;
  }
  div: nth-child(3) {
    margin-right: 20px;
  }
  div: nth-child(4) {
    margin-right: 15px;
  }
`;
const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 1604px;
  height: 50px;
  background-color: var(--admin-top-row);
  div {
    display: flex;
    justify-content: center;
  }
  div: nth-child(1) {
    margin-left: 6px;
    margin-right: 9px;
  }
  div: nth-child(3) {
    margin-right: 32px;
  }
  div: nth-child(4) {
    margin-right: 30px;
  }
  div: nth-child(5) {
    margin-right: 20px;
  }
  div: nth-child(6) {
    margin-right: 14px;
  }
  div: nth-child(7) {
    margin-right: 7px;
  }
  div: nth-child(8) {
    margin-right: 26px;
  }
  div: nth-child(9) {
    margin-right: 14px;
  }
`;
