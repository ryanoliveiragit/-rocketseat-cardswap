import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { InputCard, ButtonSubmit, CreditCard, Name, CVV, Validity, Number } from "./styles";
import creaditCard from "../../../../assets/creaditCard.png";

interface CardInformations {
  cardNumber: string;
  titularName: string;
  validity: string;
  CVV: number;
  flag?: string;
}

interface Cards {
  id: string;
  card: number;
  name: string;
  validity: string;
  CVV: number;
  flag?: string;
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
  const [card, setCard] = useState<Cards[]>([]);
  const [cardNumber, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");

  const { register, handleSubmit, formState, reset } =
    useForm<CardInformations>({
      resolver: zodResolver(newCardValidationSchema),
      defaultValues: {
        titularName: "",
      },
    });

  const { errors } = formState;

  function validationCard() {
    const firstDigit = cardNumber.charAt(0);
    let flag = '';
  
    if (firstDigit === '4') {
      flag = 'Visa';
    } else if (firstDigit === '2' || firstDigit === '5') {
      flag = 'Mastercard';
    } else if (firstDigit ==='6') {
      flag = 'ELO';
    } else {
      flag = 'Não indentificado';
    }

    return (flag)
  }
  const flag = validationCard();
  console.log(flag)

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

    if (cvvValue.length <= 16) {
      setCVV(cvvValue);
    } else {
      setCVV(cvvValue.slice(0, 16));
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

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (inputValue.length <= 24) {
      setName(inputValue);
    } else {
      setName(inputValue.slice(0, 24));
    }
  }

  function handlecreateNewCard(data: any) {
    const flag = validationCard();
    const newCard: Cards = {
      id: String(new Date().getTime()),
      card: data.cardNumber,
      name: data.titularName,
      validity: data.validity,
      CVV: data.CVV,
      flag: flag.toString(),
    };

    setCard((state) => [...state, newCard]);
    validationCard()
    reset();
    setCardNumber("");
    setName("");
    setCVV(""); // Limpa o campo "cardNumber"
    console.log(card);
  }
  return (
    <div>
      <CreditCard>
        <img src={creaditCard} alt="creditCard" />
        <Number>{cardNumber}</Number>
        <Name>{name}</Name>
        <CVV>{cvv}</CVV>
        <Validity>{validity}</Validity>
      </CreditCard>
      <form onSubmit={handleSubmit(handlecreateNewCard)}>
        <label>Número do cartão</label>
        <InputCard
          value={cardNumber}
          id="card"
          placeholder="Número do cartão"
          {...register("cardNumber", {
            valueAsNumber: true,
            required: "O campo é obrigatório.",
            maxLength: 16, // limite máximo de caracteres
          })}
          onChange={handleCardNumberChange}
        />
        <label>Validade</label>
        <InputCard
          id="validity"
          placeholder="mm/aa"
          {...register("validity", {
            required: "O campo é obrigatório.",
            maxLength: 5, // limite máximo de caracteres
            valueAsNumber: false,
          })}
          maxLength={5}
          onChange={handleValidityChange}
        />

        <label>CVV</label>
        <InputCard
          id="CVV"
          placeholder="***"
          {...register("CVV", {
            valueAsNumber: true,
            required: "O campo é obrigatório.",
          })}
          value={cvv}
          onChange={handleCvvChange}
          maxLength={3}
        />
        <label>Nome do titular</label>
        <InputCard
          value={name}
          id="name"
          placeholder="Nome do titular"
          {...register("titularName", {
            required: "O campo é obrigatório.",
          })}
          onChange={handleNameChange} // Adiciona a função de controle do tamanho máximo de caracteres
        />
        <p>Seus dados estão seguros</p>
        <ButtonSubmit type="submit">Adicionar cartão</ButtonSubmit>
      </form>
    </div>
  );
}
