import styled from "styled-components";

export default function Link({ text }) {
    return (
        <LinkSpan>{text}</LinkSpan>
    );
}

const LinkSpan = styled.span`
    font-size: 1.24em;
    font-weight: bold;
    margin: 10px 0 0;
    cursor: pointer;
`;