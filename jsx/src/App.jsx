import React from "react";

const App = () => {
  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  function meuNome() {
    return 'Ralph';
  }

  function quadrado(x) {
    return x * x;
  }

  const carro = {
    rodas: 4,
    marca: 'Ford',
  }

  return (
    <>
    <p>{'Minha empresa'.toLowerCase()}</p>
    <p>{30*2}</p>
    <p>{true}</p>
    <p>{undefined}</p>
    <p>{(() => 'Função executada')()}</p>
    <p>{meuNome()}</p>
    <p>{quadrado(4)}</p>
    <p>{quadrado(2) === 4 ? 'Fórmula correta' : 'Fórmula incorreta'}</p>
    <p>{quadrado(2) === 4 && 'Fórmula correta'}</p>
    <p>{Date.now()}</p>
    <p>{new Date().getFullYear()}</p>
    <p>
      Marca: {carro.marca}, Rodas: {carro.rodas}
    </p>
    <div>
      <h1 style={estiloH1}>Empresa</h1>
      <p style={{color: 'green'}}>Sempre aberta</p>
    </div>
    </>
  )
};

export default App;