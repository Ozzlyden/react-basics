import './App.css';
import Header from './Header';
import React, { useState } from 'react';

// COMPONENTE APP
function App() {

  // Exemplo de HOOK useState
  const [count, setCount] = useState(0);

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
