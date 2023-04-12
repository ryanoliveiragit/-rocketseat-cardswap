import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  border-radius: 8px;
  max-height: 50rem;
  width: 25rem;
  overflow: auto;
  background-color: ${(props) => props.theme["gray-900"]};
`;
export const RecentCards = styled.div`
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

 p{
    font-weight: 400;
    color: ${(props) => props.theme["gray-500"]};
 }
  }
  h1 {
    font-size: 1rem;
  }

  ul {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1rem;

    li {
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: ${(props) => props.theme["gray-100"]};
    }
    P > span {
      font-weight: 400;
    }
  }
`;
export const Name = styled.span`
    margin-top: 1rem;
    p {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        font-weight: 600;
    }
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["purple-100"]};
  border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
  :hover {
    background-color: ${(props) => props.theme["gray-700"]};
  }
`;

export const Title = styled.span`
font-weight: 600;
    color: ${(props) => props.theme["gray-500"]};
`

export const DropdownName = styled.span`
  cursor: pointer;
  padding: 1rem 0rem;
  display: flex;
  gap: 1rem;
  background-color: ${(props) => props.theme["gray-800"]};
  
  border-radius: 8px;
`;

export const Empty = styled.div`
display: flex;
justify-content: center;
padding: 2rem 0rem;
width: 100%;
align-items: center;
gap: 2rem;
flex-direction: column;

color: ${(props) => props.theme["purple-400"]};
`;
export const ContainerHistory = styled.div`
  background-color: ${(props) => props.theme["gray-800"]};
  padding: 1rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    margin-top: -.3rem;

    p {
        color: ${(props) => props.theme["gray-500"]};
    }
`;
