import styled from "styled-components";

export const InputCard = styled.input`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.85rem;
  gap: 10px;

  width: 328px;
  height: 48px;

  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme["gray-50"]};

  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;

  border: 1px solid ${(props) => props.theme["gray-700"]};
  border-radius: 4px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  :focus {
    background-color: ${(props) => props.theme["gray-900"]};
    
  }
`;
