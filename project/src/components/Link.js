import styled from "styled-components";

export default function Link({ text }) {
    return (
        <><LinkSpan>{text}</LinkSpan></>
    );
}

const LinkSpan = styled.span`
    font-size: 23px;
    font-weight: bold;
    margin: 12px 0 0;
    cursor: pointer;
`;