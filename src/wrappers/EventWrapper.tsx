import { ReactElement, ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

export const ProfissionalWrapper = ({
  children,
}: {
  children: ReactElement;
}) => {
  const { state } = useContext(MainContext);

  if (!state.name || !state.age || !state.job) {
    return <Navigate to="/" />;
  }

  if (!state.email || !state.phone) {
    return <Navigate to="/contato" />;
  }

  return children;
};
