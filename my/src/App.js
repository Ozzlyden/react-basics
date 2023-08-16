import './App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';

// COMPONENTE APP
function App() {

  // Exemplo de HOOK useState
  const [count, setCount] = useState(0);

  function callAlert(){
    alert('Seja bem vindo ao react bascis');
  };

  useEffect(()=>{
    // Atualiza o titulo do documento usando API do browser
    document.title = 'Voce clickou: ' + count + " vezes";
  },[count]); //  Atualiza quando mudar o count

  useEffect(()=>{
    callAlert();
  },[]); //  Atualiza so uma vez

  return(
    <div>
      <p>Click contador: {count} vezes</p>
      <button onClick={() => setCount(count + 1 )}>
        click em mim
      </button>
    </div>
  );
  
}

export default App;
