import React from 'react';

const App = () => {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = mario;

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
  };

  const total = dados.compras
    .map((item) => +item.preco.replace('R$ ', ''))
    .reduce((a, b) => a + b);

  return (
    <>
      {
        /* <p>{'Minha empresa'.toLowerCase()}</p>
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
    </div> */
        <div>
          <p>Nome: {dados.cliente}</p>
          <p>Idade: {dados.idade}</p>
          <p>
            Situação:{' '}
            <span style={{ color: dados.ativa ? 'green' : 'red' }}>
              {dados.ativa ? 'Ativa' : 'Inativa'}
            </span>
          </p>
          <p>Total: R$ {total}</p>
          {total > 10000 && <p>Você está gastando muito</p>}
        </div>
      }
    </>
  );
};

export default App;
