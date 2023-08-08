import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { MainContext } from "../contexts/MainContext";

export const ContactsWrapper = ({ children }: { children: ReactElement }) => {
  const { state } = useContext(MainContext);
  
  if (!state.name || !state.age || !state.job) {
    return <Navigate to="/" />;
  }

  return children;
};
