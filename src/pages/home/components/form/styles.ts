import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  border-radius: 8px;
`
export const BackgroundContainer = styled.div`
    height: 100%;
    align-items: flex-start;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 5rem;
    margin-top: 5rem;
`
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

  margin-top: 0.4rem;
  background-color: ${(props) => props.theme["gray-800"]};
  color: ${(props) => props.theme.white};

  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 24px;

  border: 1px solid ${(props) => props.theme["gray-700"]};
  border-radius: 4px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  outline: none;
  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-400"]};
    background-color: ${(props) => props.theme["gray-900"]};
  }

  :invalid {
    border-color: red;
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
  background-color: 5px solid ${(props) => props.theme['purple-100']};
  font-weight: 500;
  font-size: 1rem;
  line-height: 24px;

  background: #a855f7;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  transition: 2s;

  :hover {
    cursor: pointer;
      background-color: 5px solid ${(props) => props.theme['purple-100']};
    }
`;

export const CreditCard = styled.div`
  .placeholder {
  color: ${(props) => props.theme["gray-300"]};
  letter-spacing: 2px;
  font-weight: 400;
  font-size: .85rem;
  opacity: .6;
}
  margin: 2.9rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    box-sizing: border-box;

    width: 19em;
    height: 10.5rem;

    background: #111827;

    border: 1px solid #374151;
    border-radius: 1rem;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  h2 {
    font-size: 0.85rem;
    position: absolute;
    top: 67%;
    left: 80%;
    color: white;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    text-align: right;

    color: #e5e7eb;

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
export const Number = styled.p`
  position: absolute;
  top: 5rem;
  left: 2rem;
  color: white;
  z-index: 2;
`;
export const Name = styled.p`
  position: absolute;
  top: 7.7rem;
  left: 2rem;
  color: white;
  z-index: 2;
`;
export const CVV = styled.p`
  position: absolute;
  top: .65rem;
  left: 9rem;
  color: white;
  z-index: 2;

  color: ${(props) => props.theme["gray-900"]};
`;
export const Validity = styled.p`
  position: absolute;
  top: 7.7rem;
  left: 15.5rem;
  color: white;
  z-index: 2;
`;
export const FormContainer = styled.form`
  margin: 2.5rem;

  P {
    color: red;
  }

  label {
    font-size: 0.87rem;
    line-height: 16px;
    font-weight: 600;
  }
`;
export const InputContainer = styled.div`
  margin-top: 1.5rem;
  gap: 20px;
  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  span {
    font-size: 0.7rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-900"]};
    background-color: ${(props) => props.theme["gray-300"]};
    border-radius: 100%;
    padding: 0.2em 0.3rem;
  }
`;
export const DadosSeguro = styled.div`
  margin: 1.5rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: ${(props) => props.theme["gray-200"]};
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const InputContainerFlex = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  input {
    width: 10rem;
    display: block;
  }
`;
export const FlagCard = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.7rem;
`;
export const Sound = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 16.5rem;
`;
export const Reader = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 98%;
  height: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 0.15rem;
`;
export const ContainerCVV = styled.div`
  background-color: ${(props) => props.theme["gray-300"]};
  width: 65%;
  height: 2rem;
  position: absolute;
  top: 6.5rem;
  border-radius: 4px;
  right: 4.5rem;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Alerta = styled.div`
  position: absolute;
  left: 92rem;
`
