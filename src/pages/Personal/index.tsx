import { FormEvent, useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../contexts/MainContext";
import { UserStateType } from "../../reducers/userReducer";

import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";
import { toast, ToastContainer } from "react-toast";

interface PersonalInterface {
  name?: string;
  age?: string;
  job?: string;
}

export const Personal = () => {
  const { state, dispatch } = useContext(MainContext);
  const personalRef = useRef<PersonalInterface>({
    name: state.name,
    age: state.age,
    job: state.job,
  });

  const navigate = useNavigate();

  const handleSaveName = (e: FormEvent) => {
    e.preventDefault();
    const { name, age, job } = personalRef.current;

    if (!name) {
      toast.error("Digite um nome válido!");
      return;
    }
    if (!age) {
      toast.error("Digite uma idade válida!");
      return;
    }
    if (!job) {
      toast.error("Digite um trabalho válido!");
      return;
    }

    console.log(personalRef.current.age);

    dispatch({
      type: "ADD_PERSONAL",
      payload: {
        name: personalRef.current.name,
        age: personalRef.current.age,
        job: personalRef.current.job,
      },
    });

    navigate("/contato");
  };

  return (
    <>
      <ToastContainer delay={3000} position="top-center" />
      <StepContainer
        step={1}
        stepTitle={`Vamos começar com algumas informações pessoais.`}
        stepText="Preencha os campos abaixos."
      >
        <S.Form>
          <label htmlFor="name">Seu nome completo</label>
          <input
            type="text"
            id="name"
            value={personalRef.current.name}
            onChange={(e) => (personalRef.current.name = e.target.value)}
          />
          <label htmlFor="age">Qual a sua idade?</label>
          <input
            type="number"
            id="age"
            value={personalRef.current.age}
            onChange={(e) => (personalRef.current.age = e.target.value)}
          />
          <label htmlFor="job">Qual curso/profissão você exerce?</label>
          <input
            id="job"
            value={personalRef.current.job}
            onChange={(e) => (personalRef.current.job = e.target.value)}
          />
          <button onClick={handleSaveName} type="submit">
            Próximo
          </button>
        </S.Form>
      </StepContainer>
    </>
  );
};
