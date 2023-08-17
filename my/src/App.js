import './App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';

// COMPONENTE APP
function App() {

  // Exemplo de HOOK useState
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState('Victor');

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

  // Renderizacao condicional
  if(nome == 'Victor'){
    return(
      <div>
        <p>O nome e {nome}</p>
      </div>
    );
    }else{
      return(
        <div>
          <p>Nao tem{nome} no nome</p>
        </div>
      );
      }
  }
  

export default App;
