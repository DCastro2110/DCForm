import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";

export const Personal = () => {
  return (
    <StepContainer step={1} stepTitle={`Vamos começar com seu nome`} stepText="Preencha o campo abaixo com seu nome completo.">
    <h1>Personal</h1>
  </StepContainer>
  );
};
