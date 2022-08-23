import { FormEvent, useContext, useEffect, useState } from "react";

import { MainContext } from "../../contexts/MainContext";

import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";
import { toast, ToastContainer } from "react-toast";

export const Contacts = () => {
  const { state, dispatch } = useContext(MainContext);
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    if (state.email && state.github) {
      setEmail(state.email);
      setGithub(state.github);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email inválido");
      return;
    }
    if (!github) {
      toast.error("GitHub inválido!");
      return;
    }

    dispatch({
      type: "ADD_CONTACTS",
      payload: {
        email,
        github,
      },
    });

    toast.success("Enviado com sucesso!", {
      backgroundColor: "#77ca90",
    });

    console.log({
      name: state.name,
      level: state.level,
      email,
      github,
    });
  };

  return (
    <>
      <ToastContainer delay={3000} position="top-center" />
      <StepContainer
        step={3}
        stepTitle={`Legal ${state.name}, onde te achamos`}
        stepText="Preencha com seus contatos para conseguirmos entrar em contato."
      >
        <S.Form>
          <label htmlFor="email">Qual seu email?</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="github">Qual seu GitHub</label>
          <input
            type="text"
            id="github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Enviar
          </button>
        </S.Form>
      </StepContainer>
    </>
  );
};
