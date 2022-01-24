import React from 'react';
import styled from 'styled-components';

export default function Button({ text, onClick }) {
    return (
        <>
            <StyledButton onClick={onClick}>
                <span>{text}</span>
            </StyledButton>
        </>
    );
}

const theme = {
    pink: {
      default: 'var(--button-default-color-1)',
      hover: 'var(--button-hover-color-1)'
    }
};

const StyledButton = styled.button`
    width: 220px;
    height: 77px;
    color: var(--white);
    background-color: ${(props) => theme[props.theme].default};
    border: none;
    border-radius: 6px;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    font-size: 23px;
    font-weight: bold;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
`;

StyledButton.defaultProps = {
    theme: "pink"
};