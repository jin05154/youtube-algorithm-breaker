import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { ReactComponent as CloseIcon } from "../../images/close.svg";

export default function UploadModal({ closeUpload }) {
  return (
    <Modal>
      <ModalHeader>
        <h2>NEW VIDEO</h2>
        <CloseBtn onClick={closeUpload}>
          <CloseIcon />
        </CloseBtn>
      </ModalHeader>
      <ModalBody>업로드 모달</ModalBody>
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
  width: 870px;
  height: 500px;
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--black);
  border-radius: 5px;
  z-index: 99;
  box-shadow: rgba(0,0,0,0.6) 0 0 0 9999px;
  position: fixed;
  top: 20vh;
  animation: ${modalAnimation} 0.3s;
`;
const ModalHeader = styled.div`
  height: 50px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ModalBody = styled.div`
  height: 390px;
  padding: 5px;
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
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 186px;
`;
