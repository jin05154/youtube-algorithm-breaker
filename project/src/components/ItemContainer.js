import styled from "styled-components";

export default function ItemContainer({ children, url }) {
    const onClickContainer = () => window.open(url, '_blank')
    return <StyledUrl onClick={onClickContainer}>{children}</StyledUrl>;
}

const StyledUrl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 40vw;
    padding: 10px;
    margin: 13px;
    font-size: 26px;
    color: var(--black);
    text-decoration: none;
    cursor: pointer;
    border: 1px solid var(--black);
    border-radius: 3px;
`;