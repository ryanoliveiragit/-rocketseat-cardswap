import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import ReactCardFlip from "react-card-flip";
import Alert from '@mui/material/Alert';

import { RiErrorWarningLine } from "react-icons/ri";
import {
  InputCard,
  DadosSeguro,
  Sound,
  FlagCard,
  ButtonSubmit,
  CreditCard,
  Name,
  CVV,
  Validity,
  Number,
  FormContainer,
  InputContainer,
  InputContainerFlex,
  Reader,
  ContainerCVV,
  Container,
  BackgroundContainer,
  Alerta
} from "./styles";

import creaditCard from "../../../../assets/creaditCard.png";
import flagVisa from "../../../../assets/flagVisa.svg";
import flagElo from "../../../../assets/flagElo.svg";
import flagMastercard from "../../../../assets/flagMastercard.svg";
import sound from "../../../../assets/sound.svg";
import seguro from "../../../../assets/seguro.svg";

import UserContext from "../../../../contexts/useContext";
import { History } from '../../../history'

interface CardInformations {
  cardNumber: string;
  titularName: string;
  validity: string;
  CVV: number;
  flag?: string;
  status: string;
  apelido: String;
}

interface Cards {
  id: string;
  card: number;
  titularName: string;
  setCard: any;
  name: string;
  validity: string;
  CVV: number;
  flag?: string;
  status: string;
  apelido: String;
}

function validateExpirationDate(value: string): boolean {
  const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/; // regex para validar o formato mm/aa
  if (!regex.test(value)) {
    return false;
  }
  const parts = value.split("/");
  const month = parseInt(parts[0], 10);
  const year = parseInt(parts[1], 10);
  const now = new Date();
  const currentYear = now.getFullYear() % 100;
  const currentMonth = now.getMonth() + 1;
  return (
    month >= 1 &&
    month <= 12 &&
    year >= currentYear &&
    (year > currentYear || month >= currentMonth) &&
    !isNaN(month) && // verifique se month é um número válido
    !isNaN(year) && // verifique se year é um número válido
    value ===
    `${month.toString().padStart(2, "0")}/${year.toString().padStart(2, "0")}` // formate a string como "mm/aa"
  );
}
const newCardValidationSchema = zod.object({
  titularName: zod.string().min(1, "Por favor preencha o campo corretamente"),
  apelido: zod.string().min(1, "Por favor preencha o campo corretamente"),
  cardNumber: zod
    .number()
    .refine(
      (val) => /^\d{16}$/.test(val.toString()),
      "Por favor insira um número de cartão de crédito válido"
    ),
  validity: zod.string().refine(validateExpirationDate, {
    message:
      "Por favor insira uma validade de cartão de crédito válida no formato mm/aa",
  }),
  CVV: zod
    .number()
    .refine(
      (val) => /^\d{3}$/.test(val.toString()),
      "Por favor insira um CVV de cartão de crédito válidO"
    ),
});

export function Form() {
  const { card, setCard }: any = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cardList", JSON.stringify(card));
  }, [card]);
  console.log(card)

  const [cardNumber, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");
  const [apelido, setApelido] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const { register, handleSubmit, formState, reset } =
    useForm<CardInformations>({
      resolver: zodResolver(newCardValidationSchema),
      defaultValues: {
        status: 'Online'
      },
    });

  const { errors } = formState;

  function validationCard() {
    const firstDigit = cardNumber.charAt(0);
    let flag = "";

    if (firstDigit === "4") {
      flag = "Visa";
    } else if (firstDigit === "2" || firstDigit === "5") {
      flag = "Mastercard";
    } else if (firstDigit === "6") {
      flag = "ELO";
    } else {
      flag = "Não indentificado";
    }
    return flag;
  }

  const flag = validationCard();
  console.log(flag);

  let placeholderNumber: string = "0000 0000 0000 0000";
  let placeholderValidity: string = "--/--";
  let placeholderName: string = 'Seu nome aqui'

  function handleCardNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    const numberValue = event.target.value;

    if (numberValue.length <= 16) {
      setCardNumber(numberValue);
    } else {
      setCardNumber(numberValue.slice(0, 16));
    }
  }

  function handleCvvChange(event: React.ChangeEvent<HTMLInputElement>) {
    const cvvValue = event.target.value;

    if (cvvValue.length <= 4) {
      setCVV(cvvValue.replace(/./g, "*"));
      setCVV(cvvValue)
    } else {
      setCVV(cvvValue.slice(0, 4));
    }
  }

  function handleValidityChange(event: React.ChangeEvent<HTMLInputElement>) {
    const validityValue = event.target.value;

    if (validityValue.length <= 16) {
      setValidity(validityValue);
    } else {
      setValidity(validityValue.slice(0, 16));
    }
  }

  function handleApelidoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const apelidoValue = event.target.value;

    if (apelidoValue.length <= 16) {
      setApelido(apelidoValue);
    } else {
      setApelido(apelidoValue.slice(0, 16));
    }
  }


function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  const inputValue = event.target.value;

  if (inputValue.length <= 16) {
    setName(inputValue);
  } else {
    setName(inputValue.slice(0, 16));
  }
}
console.log(errors);

function handlecreateNewCard(data: any) {
  const flag = validationCard();
  const newCard: Cards = {
    id: String(new Date().getTime()),
    status: 'Online',
    card: data.cardNumber,
    name: data.titularName,
    titularName: data.titularName,
    validity: data.validity,
    CVV: data.CVV,
    flag: flag.toString(),
    setCard: undefined,
    apelido: data.apelido
  };
  setShowAlert(true);
  setTimeout(() => setShowAlert(false), 3000);
  setCard((state: any) => [...state, newCard]);
  validationCard();
  reset();
  setCardNumber("");
  setName("")
  setValidity("");
  setApelido("")
  setCVV(""); // Limpa o campo "cardNumber"
}

return (
  <BackgroundContainer>
    <Container>
      <UserContext.Provider value={{ card }}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div>
            <CreditCard>
              <img src={creaditCard} alt="creditCard" />
              <Number>
                {cardNumber !== "" ? cardNumber : <span className="placeholder">{placeholderNumber}</span>}
              </Number>
              <Name> {name !== "" ? name : <span className="placeholder">{placeholderName}</span>}</Name>
              <Validity>{validity !== "" ? validity : <span className="placeholder">{placeholderValidity}</span>}</Validity>
              <div>
                <FlagCard>
                  {flag === "Visa" ? (
                    <img src={flagVisa} alt="flag" />
                  ) : flag === "Mastercard" ? (
                    <img src={flagMastercard} alt="flagMaster" />
                  ) : flag === "ELO" ? (
                    <img src={flagElo} alt="flagElo" />
                  ) : (
                    <RiErrorWarningLine size={24} fill={"#FB7185"} />
                  )}
                </FlagCard>
                <Sound>
                  <img src={sound} alt="flagSound" />
                </Sound>
              </div>
            </CreditCard>
          </div>
          <div onClick={() => setIsFlipped(!isFlipped)}>
            <CreditCard>
              <img src={creaditCard} alt="creditCard" />
              <div>
                <FlagCard>
                  {flag === "Visa" ? (
                    <img src={flagVisa} alt="flag" />
                  ) : flag === "Mastercard" ? (
                    <img src={flagMastercard} alt="flagMaster" />
                  ) : flag === "ELO" ? (
                    <img src={flagElo} alt="flagElo" />
                  ) : (
                    <RiErrorWarningLine size={24} fill={"#FB7185"} />
                  )}
                </FlagCard>
                <Reader />
                <ContainerCVV>
                  <CVV>{cvv.replace(/./g, "*")}</CVV>
                </ContainerCVV>
                <h2>CVV</h2>
              </div>
            </CreditCard>
          </div>
        </ReactCardFlip>
        <FormContainer onSubmit={handleSubmit(handlecreateNewCard)}>
          <div onClick={() => setIsFlipped(!isFlipped)}></div>
          <InputContainer>
            <label>Número do cartão</label>
            <InputCard
              onClick={() => setIsFlipped(false)}
              value={cardNumber}
              id="card"
              placeholder={placeholderNumber}
              {...register("cardNumber", {
                valueAsNumber: true,
                required: "O campo é obrigatório.",
                maxLength: 16, // limite máximo de caracteres
              })}
              onChange={handleCardNumberChange}
            />
            <InputContainer>
            <InputCard
              onClick={() => setIsFlipped(false)}
              value={apelido}
              id="apelido"
              placeholder="Apelido do cartão"
              {...register("apelido", {
                valueAsNumber: false,
                required: "O campo é obrigatório.",
              })}
              onChange={handleApelidoChange} //Adiciona a função de controle do tamanho máximo de caracteres
            />
          </InputContainer>
          </InputContainer>
          <InputContainerFlex>
            <InputContainer>
              <label>Validade</label>
              <InputCard
                onClick={() => setIsFlipped(false)}
                id="validity"
                placeholder={placeholderValidity}
                {...register("validity", {
                  required: "O campo é obrigatório.",
                  maxLength: 5, // limite máximo de caracteres
                  valueAsNumber: false,
                })}
                maxLength={5}
                onChange={handleValidityChange}
              ></InputCard>
            </InputContainer>

            <InputContainer>
              <div>
                <label>CVV</label>
                <span>?</span>
              </div>
              <InputCard
                onClick={() => setIsFlipped(true)}
                id="CVV"
                placeholder="***"
                type="password"

                {...register("CVV", {
                  valueAsNumber: true,
                  required: "O campo é obrigatório.",
                })}
                value={cvv}
                onChange={handleCvvChange}
                maxLength={3}
              />
            </InputContainer>
          </InputContainerFlex>

          <InputContainer>
            <label>Nome do titular</label>
            <InputCard
              onClick={() => setIsFlipped(false)}
              value={name}
              id="name"
              placeholder="Nome do titular"
              {...register("titularName", {
                valueAsNumber: false,
                required: "O campo é obrigatório.",
              })}
              onChange={handleNameChange} //Adiciona a função de controle do tamanho máximo de caracteres
            />
          </InputContainer>
          <DadosSeguro>
            <img src={seguro} alt="" />
            <p>Seus dados estão seguros</p>
          </DadosSeguro>
          <ButtonSubmit type="button" onClick={handleSubmit(handlecreateNewCard)}>Adicionar cartão</ButtonSubmit>
        </FormContainer>
      </UserContext.Provider>
    </Container>
    <History />
    {showAlert && <Alerta><Alert severity="success">Novo cartão adicionado!</Alert></Alerta>}
  </BackgroundContainer>
);
}

