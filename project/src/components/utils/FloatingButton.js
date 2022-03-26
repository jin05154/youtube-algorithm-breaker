import styled from "styled-components";

export default function FloatingButton({
  theme,
  text,
  width,
  height,
  border = "none",
  fontSize = "23px",
  margin,
  onClick,
}) {
  return (
    <StyledButton
      theme={theme}
      width={width}
      height={height}
      border={border}
      fontSize={fontSize}
      margin={margin}
      onClick={onClick}
    >
      <span>{text}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  min-width: 220px;
  min-height: 77px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${(props) => textColor[props.theme].default};
  background-color: ${(props) => theme[props.theme].default};
  border: ${({ border }) => border};
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
  }
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
  white: {
    default: "var(--black)",
    hover: "var(--white)",
  },
};

StyledButton.defaultProps = {
  width: "220px",
  height: "77px",
  margin: "5px",
  theme: "pink",
  textColor: "pink",
};
