import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

export const ContactsWrapper = ({ children }: { children: ReactElement }) => {
  const { state } = useContext(MainContext);

  if (!state.name) {
    return <Navigate to="/" />;
  } else if (state.haveParticipatedInTheEvent === undefined) {
    return <Navigate to="/step2" />;
  }

  return children;
};
