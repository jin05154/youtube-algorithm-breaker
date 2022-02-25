import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

import { ReactComponent as TrashIcon } from "../../images/trash.svg";

export default function VideoListRow({ type, video }) {
  return (
    <>
      {type === "content" && (
        <ContentRow>
          <div>
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "var(--button-default-color-1)",
                },
              }}
            />
          </div>
          <div className="small-img-wrapper">
            <img src={video.thumbnail} alt="" />
          </div>
          <div style={{ width: "530px" }} className="admin-video-title">
            <a href={video.url} target="_blank" rel="noreferrer">
              {video.video_title}
            </a>
          </div>
          <div style={{ width: "150px" }}>{video.channel_name}</div>
          <div style={{ width: "100px" }}>{video.publish_date}</div>
          <div style={{ width: "100px" }}>{video.db_upload_date}</div>
          <div style={{ height: "24px" }} id="trash-btn" title="delete">
            <TrashIcon />
          </div>
        </ContentRow>
      )}
      {type === "top" && (
        <TopRow>
          <div style={{ width: "42px" }}>선택</div>
          <div style={{ width: "150px" }}>썸네일</div>
          <div style={{ width: "530px" }}>제목</div>
          <div style={{ width: "150px" }}>채널명</div>
          <div style={{ width: "100px" }}>업로드 날짜</div>
          <div style={{ width: "100px" }}>DB 등록 날짜</div>
          <div style={{ height: "24px" }}>삭제</div>
        </TopRow>
      )}
    </>
  );
}

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1250px;
  word-break: break-all;
  align-items: center;
  border-top: 2px solid var(--black);
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
