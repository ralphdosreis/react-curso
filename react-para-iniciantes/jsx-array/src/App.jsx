import React from 'react';

/* const App = () => {
  const livros = [
    { nome: 'Game of Thrones', ano: 1996 },
    { nome: 'Clash of Kings', ano: 1998 },
    { nome: 'Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map((livro) => (
          <li key={livro.nome}>
            {livro.nome}, {livro.ano}
          </li>
        ))}
    </ul> 
  ); 
}; */

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const dados = produtos.filter(
    ({ preco }) => +preco.replace('R$ ', '') > 1500,
  );
  return (
    <section>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: 'white' }} key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default App;
