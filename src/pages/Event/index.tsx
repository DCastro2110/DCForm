import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../contexts/MainContext";

import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";
import { ToastContainer, toast } from "react-toast";

import { captureTheFirstName } from "../../utils/captureTheFirstName";

export const Profissional = () => {
  const { state, dispatch } = useContext(MainContext);
  const navigate = useNavigate();
  const [eventStatus, setEventStatus] = useState<boolean | undefined>(
    state.haveParticipatedInTheEvent
  );

  const handleChooseLevel = (e: FormEvent) => {
    e.preventDefault();

    if (eventStatus === undefined) {
      toast.error("Selecione uma das opções abaixo!");
      return;
    }

    dispatch({
      type: "ADD_PCD_STATUS",
      payload: {
        haveParticipatedInTheEvent: eventStatus,
      },
    });

    toast.success("Salvo com sucesso!", {
      backgroundColor: "#77ca90",
    });
  };

  const handleBack = () => {
    navigate("/contato");
  };

  return (
    <>
      <ToastContainer delay={3000} position="top-center" />
      <StepContainer
        step={3}
        stepTitle={`${captureTheFirstName(
          state.name || ""
        )}, você já participou de alguma das edições anteriores?`}
        stepText="Já tivemos duas edições aqui em Juiz de Fora."
      >
        <S.Form>
          <input
            type="radio"
            id="yes"
            name="event-status"
            checked={eventStatus === true}
            onChange={() => setEventStatus(true)}
          />
          <label htmlFor="yes">
            <S.ImgBox>🥳</S.ImgBox>
            <S.TextBox>
              <strong>Já participei!</strong>
              <small>
                Estou doido para poder tomar aquele chopp de novo!
              </small>
            </S.TextBox>
          </label>
          <input
            type="radio"
            id="no"
            name="event-status"
            checked={eventStatus === false}
            onChange={() => setEventStatus(false)}
          />
          <label htmlFor="no">
            <S.ImgBox>🤓</S.ImgBox>
            <S.TextBox>
              <strong>Ainda não!</strong>
              <small>Vou dessa vez, porque disseram que tem pizza.</small>
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
    </>
  );
};
