import styled from 'styled-components';

export default function Button({ theme, text, width, height, onClick }) {
    return (
        <StyledButton theme={theme} width={width} height={height} onClick={onClick}>
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
    border: none;
    border-radius: 6px;
    margin: 5px;
    cursor: pointer;
    font-size: 23px;
    font-weight: bold;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
        color: ${(props) => textColor[props.theme].hover};
    }
`;

const theme = {
    pink: {
        default: 'var(--button-default-color-1)',
        hover: 'var(--button-hover-color-1)'
    },
    gray: {
        default: 'var(--button-default-color-2)',
        hover: 'var(--button-default-color-1)'
    }
};

const textColor = {
    pink: {
        default: 'var(--white)',
        hover: 'var(--white)'
    },
    gray: {
        default: 'var(--black)',
        hover: 'var(--white)'
    }
};

StyledButton.defaultProps = {
    width: "220px",
    height: "77px",
    theme: "pink",
    textColor: "pink"
};