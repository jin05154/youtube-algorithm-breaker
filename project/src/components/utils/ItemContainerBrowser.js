import styled from "styled-components";

export default function ItemContainerBrowser({ children, url }) {
  const onClickContainer = () => window.open(url, "_blank");
  return (
    <BrowserContainer onClick={onClickContainer}>{children}</BrowserContainer>
  );
}

const BrowserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50vw;
  padding: 12px;
  margin: 13px;
  font-size: 26px;
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

BrowserContainer.defaultProps = {
  theme: "pink",
  textColor: "pink",
};
