import styled from "styled-components";

export default function ItemContainerMobile({ url, img, title, channel, avatar, playtime, date }) {
  const onClickContainer = () => window.open(url, "_blank");
  return (
    <>
      <MobileContainer onClick={onClickContainer}>
        <div className="img-wrapper">
          <img src={img} alt="이미지 로딩 실패" />
          <div>{playtime}</div>
        </div>
        <div className="vid-info-wrapper">
          <div className="vid-info-avatar">
            <img src={avatar} alt={channel} />
          </div>
          <div className="vid-infos">
            <p>{title}</p>
            <p>{channel}</p>
            <p>{date}</p>
          </div>
        </div>
      </MobileContainer>
    </>
  );
}

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 83vw;
  padding: 12px;
  margin: 13px 0;
  font-size: 15px;
  color: ${(props) => textColor[props.theme].default};
  background-color: ${(props) => theme[props.theme].default};
  text-decoration: none;
  cursor: pointer;
  word-break: keep-all;
  border: 2.3px solid var(--title-shadow);
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    color: ${(props) => textColor[props.theme].hover};
    border: 2.3px solid ${(props) => theme[props.theme].hover};
  }
`;

const theme = {
  pink: {
    default: "var(--white)",
    hover: "var(--button-default-color-1)",
  },
};

const textColor = {
  pink: {
    default: "var(--black)",
    hover: "var(--white)",
  },
};

MobileContainer.defaultProps = {
  theme: "pink",
  textColor: "pink",
};
