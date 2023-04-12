import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 1.5rem;
    flex-direction: column;
    border-radius: 8px;

    max-height: 40rem;
    overflow: auto;
    background-color: ${(props) => props.theme["gray-800"]};
`
export const RecentCards = styled.div`
h1 {
    font-size: 1rem;
}
    padding: 1rem;
    ul {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 3rem;

        li {
            font-size: 1rem;
            gap: 1rem;
            display: flex;
            flex-direction: column;
            text-decoration: none;
            color: ${(props) => props.theme["gray-300"]};
        }
        P>span {
            font-weight: 600;
        }
    }
`
export const Name = styled.span`
    color: ${(props) => props.theme["purple-100"]};
`
export const Sucess = styled.span`
color: ${(props) => props.theme["sucess"]};
`