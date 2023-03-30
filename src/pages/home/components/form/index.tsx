import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { InputCard } from "./styles";

interface CardInformations {
  cardNumber: string;
  titularName: string;
  validity: string;
  CVV: string;
}

interface Cards {
  id: string;
  card: number;
  name: string;
  validity: string;
  CVV: number;
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
    value === `${month.toString().padStart(2, "0")}/${year.toString().padStart(2, "0")}` // formate a string como "mm/aa"
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
    validity: zod
    .string()
    .refine(validateExpirationDate, {
      message: "Por favor insira uma validade de cartão de crédito válida no formato mm/aa",
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

  const { register, handleSubmit, formState, reset } =
    useForm<CardInformations>({
      resolver: zodResolver(newCardValidationSchema),
      defaultValues: {
        titularName: "",
      },
    });

  const { errors } = formState;

  function handlecreateNewCard(data: any) {
    const newCard: Cards = {
      id: String(new Date().getTime()),
      card: data.cardNumber,
      name: data.titularName,
      validity: data.validity,
      CVV: data.CVV,
    };

    setCard((state) => [...state, newCard]);
    reset();
  }

  console.log(errors);
  console.log(card);

  return (
    <div>
      <form onSubmit={handleSubmit(handlecreateNewCard)}>
        <label>Número do cartão</label>
        <InputCard
          id="card"
          placeholder="Número do cartão"
          {...register("cardNumber", {
            valueAsNumber: true,
            required: "O campo é obrigatório.",
            maxLength: 16, // limite máximo de caracteres
          })}
        />

        <label>Validade</label>
        <InputCard
          id="validity"
          placeholder="mm/aa"
          {...register("validity", {
            required: "O campo é obrigatório.",
            maxLength: 4, // limite máximo de caracteres
          })}
        />

        <label>CVV</label>
        <InputCard
          id="CVV"
          placeholder="***"
          {...register("CVV", {
            valueAsNumber: true,
            required: "O campo é obrigatório.",
            maxLength: 4, // limite máximo de caracteres
          })}
        />

        <label>Nome do titular</label>
        <InputCard
          id="name"
          placeholder="Nome como esta no cartão"
          type="text"
          {...register("titularName")}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
