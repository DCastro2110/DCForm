import { FormEvent, useContext, useEffect, useState } from "react";

import { MainContext } from "../../contexts/MainContext";

import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";
import { toast, ToastContainer } from "react-toast";

export const Contacts = () => {
  const { state, dispatch } = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (state.email && state.phone) {
      setEmail(state.email);
      setPhone(state.phone);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email inválido");
      return;
    }
    if (!phone) {
      toast.error("Telefone inválido!");
      return;
    }

    dispatch({
      type: "ADD_CONTACTS",
      payload: {
        email,
        phone,
      },
    });

    toast.success("Salvo com sucesso!", {
      backgroundColor: "#77ca90",
    });
  };

  return (
    <>
      <ToastContainer delay={3000} position="top-center" />
      <StepContainer
        step={3}
        stepTitle={`Estamos quase lá`}
        stepText="Para finalizar, preencha com seus dados para que possamos entrar em contato."
      >
        <S.Form>
          <label htmlFor="email">Qual seu email?</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="phone">Qual seu telefone para contato?</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Enviar
          </button>
        </S.Form>
      </StepContainer>
    </>
  );
};
