import React from 'react';
import Form from './Form/Form';

const Header = ({ logado, nome }) => {
  if (logado) {
    return <header>Bem vindo, {nome}</header>;
  } else {
    return <header>Header</header>;
  }
};

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};
const App = () => {
  const logado = true;
  const nome = 'Ralph';

  return (
    <React.Fragment>
      <section>
        <Header logado={logado} nome={nome} />
      </section>
      <Form />
    </React.Fragment>
    /*    <section>
      <Titulo texto="Meu primeiro Titulo" cor="blue" />
      <Titulo texto="Meu segundo Titulo" cor="red" />
    </section> */
  );
};

export default App;
