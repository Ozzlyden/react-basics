import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// RENDER 
const root = ReactDOM.createRoot(document.getElementById('root'));  // colocar esse componete na div id = "root"

root.render(
  // Chamar componentes
  <React.StrictMode>
    <App texto ="Ola mundo 1"/>  
    <App texto="Ola mundo 2"/>
  </React.StrictMode>
);

