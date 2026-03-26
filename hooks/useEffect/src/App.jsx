import React from 'react';
import Produto from './Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  const titulo = 'Titulo ';

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect (() => {
    document.title = titulo + contar;
  }, [contar]);

  return <>
  <div>
    <p>Meu App</p>
    <button onClick={() => setAtivo(!ativo)}>Abrir</button>
    {ativo && <Produto />}
  </div>
  <div>
    {dados && (
      <div>
        <h1>{dados.nome}</h1>
        <p>R${dados.preco * contar}</p>
      </div>
    )}
  </div>
  <button onClick={() => setContar(contar + 1)}>{contar}</button>
  </>;
}

export default App;