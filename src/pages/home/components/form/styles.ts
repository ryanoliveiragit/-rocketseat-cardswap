import styled from "styled-components";

export const InputCard = styled.input`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.85rem;
  gap: 10px;

  width: 20.5rem;
  height: 3rem;

  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme.white};

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

export const ButtonSubmit = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 3rem;
  gap: 8px;

  width: 20.5rem;
  height: 3.5rem;

  color: ${(props) => props.theme["gray-50"]};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;

  background: #A855F7;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

export const CreditCard = styled.div`
  img {
    box-sizing: border-box;

    width: 17.5rem;
    height: 10.5rem;

    background: #111827;

    border: 1px solid #374151;
    border-radius: 1rem;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`
export const Number = styled.p`
    position: absolute;
    top: 5rem;
    left: 3rem;
    color: white;
    z-index: 2;
`
export const Name = styled.p`
    position: absolute;
    top: 7.9rem;
    left: 3rem;
    color: white;
    z-index: 2;
`
export const CVV = styled.p`
    position: absolute;
    top: 8rem;
    left: 10rem;
    color: white;
    z-index: 2;
`
export const Validity = styled.p`
    position: absolute;
    top: 7.9rem;
    left: 13rem;
    color: white;
    z-index: 2;
`



