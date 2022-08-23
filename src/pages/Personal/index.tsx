import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../contexts/MainContext";

import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";
import { toast, ToastContainer } from "react-toast";

export const Personal = () => {
  const { state, dispatch } = useContext(MainContext);
  const [name, setName] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state.name) setName(state.name);
  }, []);

  const handleSaveName = (e: FormEvent) => {
    e.preventDefault();
    if (!name) {
      toast.error("Digite um nome válido!");
      return;
    }

    dispatch({
      type: "ADD_NAME",
      payload: {
        name,
      },
    });

    navigate("/step2");
  };

  return (
    <>
      <ToastContainer delay={3000} position="top-center" />
      <StepContainer
        step={1}
        stepTitle={`Vamos começar com seu nome`}
        stepText="Preencha o campo abaixo com seu nome completo."
      >
        <S.Form>
          <label>Seu nome completo</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSaveName} type="submit">
            Próximo
          </button>
        </S.Form>
      </StepContainer>
    </>
  );
};
