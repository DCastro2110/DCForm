import * as S from "./style";

import { StepContainer } from "../../components/StepContainer";

export const Profissional = () => {
  return (
    <StepContainer
      step={1}
      stepTitle={`Davi, o que melhor descreve você`}
      stepText="Escolha a opção que melhor condiz com seu estado atual, profissionalmente"
    >
      <h1>Personal</h1>
    </StepContainer>
  );
};
