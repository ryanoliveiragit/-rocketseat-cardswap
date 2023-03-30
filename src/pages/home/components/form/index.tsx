import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { InputCard } from "./styles";

interface CardInformations {
  cardNumber: number;
  titularName: string;
  validity: number;
  CVV: number;
}

interface Cards {
  id: string;
  card: number;
  name: string;
  validity: number;
  CVV: number;
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
    .number()
    .refine(
      (val) => /^\d{4}$/.test(val.toString()),
      "Por favor insira uma validade de cartão de crédito válida"
    ),
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
            valueAsNumber: true,
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
