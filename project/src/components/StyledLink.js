import { Link } from "react-router-dom";
import styled from "styled-components";

export default function StyledLink({ children, url }) {
    return (
        <StyleLink to={url}>{children}</StyleLink>
    );
}

const StyleLink = styled(Link)`
    font-size: 1.24em;
    font-weight: bold;
    margin: 10px 0 0;
    cursor: pointer;
    text-decoration: none;
    color: var(--black);
`;