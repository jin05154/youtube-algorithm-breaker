import { useState } from "react";

import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export default function UploadModal({ closeUpload }) {
  const [url, setUrl] = useState("");
  const [pasteErr, setPasteErr] = useState(false);
  // 복사한 영상 url 클립보드에서 가져오기
  const getVideoUrl = () =>
    setTimeout(async () => {
      const text = await navigator.clipboard.readText();
      if (text.substring(0, 17) === "https://youtu.be/") {
        setPasteErr(false);
        setUrl(text.substring(17));
      } else setPasteErr(true);
    });

  return (
    <Modal>
      <ModalHeader>
        <h2>NEW VIDEO</h2>
        <CloseBtn onClick={closeUpload}>
          <CloseIcon />
        </CloseBtn>
      </ModalHeader>
      <ModalBody>
        <BodyElement>
          <BodyName>
            <h4>영상 URL</h4>
          </BodyName>
          <p>{url}</p>
          {url === "" && (
            <Button
              type="default"
              theme="gray"
              text="붙여넣기"
              width="80px"
              height="34px"
              fontSize="15px"
              margin="0"
              onClick={getVideoUrl}
            />
          )}
          {pasteErr && (
            <ErrorMsg>영상의 주소가 제대로 복사되었는지 확인해주세요.</ErrorMsg>
          )}
        </BodyElement>
        <BodyElement>
          <BodyName>
            <h4>카테고리</h4>
          </BodyName>
        </BodyElement>
        <BodyElement>
          <BodyName>
            <h4>나이대</h4>
          </BodyName>
        </BodyElement>
        <BodyElement>
          <BodyName>
            <h4>성별</h4>
          </BodyName>
        </BodyElement>
      </ModalBody>
      <ModalFooter>
        <FooterWrapper>
          <Button
            type="default"
            theme="darkGray"
            text="취소"
            width="80px"
            height="44px"
            fontSize="17px"
            onClick={closeUpload}
          />
          <Button
            type="default"
            text="업로드"
            width="100px"
            height="44px"
            fontSize="17px"
          />
        </FooterWrapper>
      </ModalFooter>
    </Modal>
  );
}

const modalAnimation = keyframes`
  0% {
    opacity: 0;
    margin-top: -50px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
`;
const Modal = styled.div`
  width: 800px;
  height: 500px;
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--black);
  border-radius: 5px;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.6) 0 0 0 9999px;
  position: fixed;
  top: 20vh;
  animation: ${modalAnimation} 0.3s;
`;
const ModalHeader = styled.div`
  height: 50px;
  padding: 0 3px 0 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ModalBody = styled.div`
  height: 390px;
  padding: 5px 14px;
`;
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
`;
const CloseBtn = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;
const BodyElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BodyName = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 34px;
  padding: 3px 0;
`;
const ErrorMsg = styled.p`
  color: red;
  font-size: 0.85em;
  padding: 0 8px;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 186px;
  padding: 0 3px;
`;
