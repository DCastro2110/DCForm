import { Routes, Route } from 'react-router-dom';

import * as S from './App.style'

import { Personal } from './pages/Personal';
import { Profissional } from './pages/Profissional';
import { Contacts } from './pages/Contacts';


const App = () => {
  return (
    <>
      <S.Container>
        <S.Header>
          <h1>Cadastro de Desenvolvedor</h1>
          <small>Faça seu cadastro para entrar no nosso banco de talentos.</small>
        </S.Header>

        <Routes>

          <Route path='/' element={<Personal/>} />
          <Route path='/step2' element={<Profissional/>} />
          <Route path='/step3' element={<Contacts/>} />

        </Routes>
      </S.Container>
    </>
  )
};

export default App;
