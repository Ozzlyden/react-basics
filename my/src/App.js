import './App.css';
import Header from './Header';
import React, { useState, useEffect } from 'react';

// COMPONENTE APP
export default function App() {

  // Variaveis ou constantes
  const [hora,setHora] = useState(4);
  const [minuto, setMinuto] = useState(59);
  const [segundo,setSegundo] = useState(45);

  // HOOK 
  useEffect(() => {
      const interval = setInterval(() => {
          setSegundo(segundo+1);

          if(segundo == 59){
            setSegundo(0);
            setMinuto(minuto+1);

            if(minuto == 59){
              setMinuto(0);
              setHora(hora+1);
            }
          }
      }, 1000); // Chegando em 1000 chama useEffect novamente

      return () => clearInterval(interval); // Limpar a const
  });


  return (
    <div>
      <h2 style={{textAlign:'center',color:'red'}}>{hora}:{minuto}:{segundo}</h2>
    </div>
  );
  }
  