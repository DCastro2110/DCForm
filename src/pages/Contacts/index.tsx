import { StepContainer } from "../../components/StepContainer";
import * as S from "./style";

export const Contacts = () => {
  return (
    <StepContainer
      step={3}
      stepTitle={`Legal Davi, onde te achamos`}
      stepText="Preencha com seus contatos para conseguirmos entrar em contato."
    >
      <h1>Contacts</h1>
    </StepContainer>
  );
};
