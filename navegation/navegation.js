
import React from 'react';

import Login from '../pages/login';
import Home from '../pages/home';
import Sobre from '../pages/sobre';
import Contato from '../pages/contato';

export default function Navegation({ tela, setTela }) {
  function navegar(destino) {
    setTela(destino);
  }

  function sair() {
    setTela('Login');
  }

  switch (tela) {
    case 'Login':
      return <Login onEntrar={() => setTela('Home')} />;

    case 'Home':
      return <Home navegar={navegar} sair={sair} />;

    case 'Sobre':
      return <Sobre navegar={navegar} />;

    case 'Contato':
      return <Contato navegar={navegar} />;

    default:
      return <Login onEntrar={() => setTela('Home')} />;
  }
}
