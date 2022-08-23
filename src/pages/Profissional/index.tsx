import { FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../contexts/MainContext";

import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";

export const Profissional = () => {
  const { state, dispatch } = useContext(MainContext);
  const navigate = useNavigate();
  const [level, setLevel] = useState<"begginer" | "pro" | undefined>();

  useEffect(() => {
    if (state.level) return setLevel(state.level);
    setLevel("begginer");
  }, []);

  const handleChooseLevel = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: "CHOOSE_LEVEL",
      payload: {
        level
      },
    });

    navigate("/step3");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <StepContainer
      step={2}
      stepTitle={`${state.name}, o que melhor descreve você`}
      stepText="Escolha a opção que melhor condiz com seu estado atual, profissionalmente"
    >
      <S.Form>
        <input
          type="radio"
          id="begginer"
          name="level"
          checked={level === "begginer" ? true : false}
          onChange={() => setLevel("begginer")}
        />
        <label htmlFor="begginer">
          <S.ImgBox>🤓</S.ImgBox>
          <S.TextBox>
            <strong>Sou iniciante</strong>
            <small>Iniciei meus estudos tem pouco tempo</small>
          </S.TextBox>
        </label>
        <input
          type="radio"
          id="pro"
          name="level"
          checked={level === "pro" ? true : false}
          onChange={() => setLevel("pro")}
        />
        <label htmlFor="pro">
          <S.ImgBox>🥳</S.ImgBox>
          <S.TextBox>
            <strong>Sou experiente</strong>
            <small>Já programo há 2 anos ou mais</small>
          </S.TextBox>
        </label>
        <S.Buttons>
          <button onClick={handleBack}>Voltar</button>
          <button type="submit" onClick={handleChooseLevel}>
            Próximo
          </button>
        </S.Buttons>
      </S.Form>
    </StepContainer>
  );
};
