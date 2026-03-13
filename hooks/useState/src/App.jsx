import React from 'react';

const App = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    const novoValor = contar + 1;
    setContar(novoValor);
    setItems([...items, `Item ${novoValor}`]);
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default App;
