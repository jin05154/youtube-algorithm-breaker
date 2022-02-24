import styled from "styled-components";

export default function VideoListItem({ children }) {
    return <ItemWrapper>{children}</ItemWrapper>;
}

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 1250px;
    word-break: break-all;
    align-items: center;
    border-top: 2px solid var(--black);
    div {
        margin: 0 7px;
    }
    div: nth-child(3) {
        margin-right: 20px;
    }
    div: nth-child(4) {
        margin-right: 15px;
    }
`;