import styled from "styled-components";

export default function StyledUrl({ children, url }) {
    return <StyleUrl href={url} target='_blank'>{children}</StyleUrl>;
}

const StyleUrl = styled.a`
    font-size: 30px;
    color: var(--black);
    text-decoration: none;
    cursor: pointer;
`;