import styled from "styled-components";

export default function VideoListItem({ children }) {
    return <ItemWrapper>{children}</ItemWrapper>;
}

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 80vw;
    word-break: keep-all;
    align-items: center;
    border-top: 2px solid var(--black);
    div {
        margin-right: 40px;
    }
    div: nth-child(2) {
        margin-right: 15px;
    }
`;