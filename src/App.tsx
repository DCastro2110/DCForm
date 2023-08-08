import { Routes, Route } from "react-router-dom";

import * as S from "./App.style";

import { Personal } from "./pages/Personal";
import { Profissional } from "./pages/Event";
import { Contacts } from "./pages/Contacts";
import { MainContextProvider } from "./contexts/MainContext";
import { ProfissionalWrapper } from "./wrappers/EventWrapper";
import { ContactsWrapper } from "./wrappers/ContactsWrapper";

const App = () => {
  return (
    <>
      <S.Container>
        <S.Header>
          <div>
            <h1>Inscrições para o Pro Civitate Dei JF - 2023</h1>
            <small>Fechamento das Incrições: 08/11/2023</small>
          </div>
          <img src="assets/logo-pcd.svg" />
        </S.Header>

        <MainContextProvider>
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route
              path="/contato"
              element={
                <ContactsWrapper>
                  <Contacts />
                </ContactsWrapper>
              }
            />
            <Route
              path="/evento"
              element={
                <ProfissionalWrapper>
                  <Profissional />
                </ProfissionalWrapper>
              }
            />
          </Routes>
        </MainContextProvider>
      </S.Container>
    </>
  );
};

export default App;
