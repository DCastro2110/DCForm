import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../contexts/MainContext";

import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";
import { toast, ToastContainer } from "react-toast";

export const Contacts = () => {
  const { state, dispatch } = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

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

    navigate("/evento");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <ToastContainer delay={3000} position="top-center" />
      <StepContainer
        step={2}
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
          <S.Buttons>
            <button onClick={handleBack}>Voltar</button>
            <button onClick={handleSubmit} type="submit">
              Enviar
            </button>
          </S.Buttons>
        </S.Form>
      </StepContainer>
    </>
  );
};
