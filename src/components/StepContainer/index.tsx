import { ReactElement } from "react";
import { StepIcon } from "../StepIcon";
import * as S from "./style";

import PersonIcon from "../../assets/svg/person.svg";
import BookIcon from "../../assets/svg/book.svg";
import EmailIcon from "../../assets/svg/email.svg";

type Props = {
  step: number;
  stepTitle: string;
  stepText: string;
  children: ReactElement;
};

export const StepContainer = ({
  step,
  stepTitle,
  stepText,
  children,
}: Props) => {
  return (
    <S.Container>
      <S.StepSide>
        <StepIcon
          stepName="Pessoal"
          stepInfo="Se identifique"
          imgSrc={PersonIcon}
        ></StepIcon>
        <StepIcon
          stepName="Profissional"
          stepInfo="Seu nível"
          imgSrc={BookIcon}
        ></StepIcon>
        <StepIcon
          stepName="Contatos"
          stepInfo="Como te achar"
          imgSrc={EmailIcon}
        ></StepIcon>
      </S.StepSide>
      <S.Main>
        <header>
          <small>Passo {step}/3</small>
          <h2>{stepTitle}</h2>
          <span>{stepText}</span>
        </header>

        <div>{children}</div>
      </S.Main>
    </S.Container>
  );
};
