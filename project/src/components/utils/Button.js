import styled from "styled-components";

export default function Button({
  type,
  theme,
  text,
  width,
  height,
  border = "none",
  fontSize = "23px",
  margin = "20px",
  onClick,
}) {
  return (
    <>
      {type === "default" && (
        <DefaultButton
          theme={theme}
          width={width}
          height={height}
          fontSize={fontSize}
          margin={margin}
          onClick={onClick}
        >
          <span>{text}</span>
        </DefaultButton>
      )}
      {type === "floating" && (
        <FloatingButton
          theme={theme}
          width={width}
          height={height}
          border={border}
          fontSize={fontSize}
          margin={margin}
          onClick={onClick}
        >
          <span>{text}</span>
        </FloatingButton>
      )}
      {type === "shadow" && (
        <ShadowButton margin={margin} onClick={onClick}>
          <span>{text}</span>
        </ShadowButton>
      )}
    </>
  );
}

const DefaultButton = styled.button`
  min-width: 60px;
  min-height: 20px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${(props) => textColor[props.theme].default};
  background-color: ${(props) => theme[props.theme].default};
  border: none;
  border-radius: 6px;
  padding: 5px;
  margin-top: ${({ margin }) => margin};
  margin-bottom: ${({ margin }) => margin};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  letter-spacing: 1px;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    color: ${(props) => textColor[props.theme].hover};
  }
`;
const FloatingButton = styled.button`
  min-width: 220px;
  min-height: 77px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${(props) => textColor[props.theme].default};
  background-color: ${(props) => theme[props.theme].default};
  border: 2px solid ${(props) => border[props.theme].default};
  border-radius: 6px;
  margin-top: ${({ margin }) => margin};
  margin-bottom: ${({ margin }) => margin};
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: bold;
  box-shadow: 0px 17px 10px -10px rgba(0,0,0,0.4);
  transition: all ease-in-out 300ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    color: ${(props) => textColor[props.theme].hover};
    border: 2px solid ${(props) => border[props.theme].hover};
    box-shadow: 0px 37px 20px -15px rgba(0,0,0,0.2);
    transform: translate(0px, -10px);
  }
`;
const ShadowButton = styled.button`
  width: 320px;
  height: 100px;
  margin-top: ${({ margin }) => margin};
  margin-bottom: ${({ margin }) => margin};
  border: none;
  border-radius: 27px;
  background-color: var(--white);
  color: var(--black);
  font-size: 19px;
  font-weight: bold;
  box-shadow: 0px 3px 4px -2px var(--button-default-color-1);
  white-space: pre-wrap;
`;
const theme = {
  pink: {
    default: "var(--button-default-color-1)",
    hover: "var(--button-hover-color-1)",
  },
  gray: {
    default: "var(--button-default-color-2)",
    hover: "var(--button-default-color-1)",
  },
  darkGray: {
    default: "var(--button-default-color-2)",
    hover: "var(--button-hover-color-2)",
  },
  white: {
    default: "var(--white)",
    hover: "var(--button-default-color-1)",
  }
};
const textColor = {
  pink: {
    default: "var(--white)",
    hover: "var(--white)",
  },
  gray: {
    default: "var(--black)",
    hover: "var(--white)",
  },
  darkGray: {
    default: "var(--black)",
    hover: "var(--white)",
  },
  white: {
    default: "var(--black)",
    hover: "var(--white)",
  },
};
const border = {
  white: {
    default: "var(--login-box-border)",
    hover: "var(--button-default-color-1)",
  }
}
DefaultButton.defaultProps = {
  width: "220px",
  height: "77px",
  margin: "5px",
  theme: "pink",
  textColor: "pink",
};
