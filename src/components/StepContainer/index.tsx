import { ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";

import * as S from "./style";

import { StepIcon } from "../StepIcon";

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
  const { pathname } = useLocation();

  return (
    <S.Container>
      <S.StepSide>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <StepIcon
            stepName="Pessoal"
            stepInfo=""
            imgSrc={PersonIcon}
            isActive={pathname === "/"}
          ></StepIcon>
        </NavLink>
        <NavLink to="/contato" style={{ textDecoration: "none" }}>
          <StepIcon
            stepName="Contatos"
            stepInfo=""
            imgSrc={EmailIcon}
            isActive={pathname === "/contato"}
          ></StepIcon>
        </NavLink>
        <NavLink to="/evento" style={{ textDecoration: "none" }}>
          <StepIcon
            stepName="Evento"
            stepInfo=""
            imgSrc={BookIcon}
            isActive={pathname === "/evento"}
          ></StepIcon>
        </NavLink>
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
