import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';

// RENDER 
const root = ReactDOM.createRoot(document.getElementById('root'));  // colocar esse componete na div id = "root"

root.render(
  // Chamar componentes
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);

