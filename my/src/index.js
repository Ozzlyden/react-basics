import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// RENDER 
const root = ReactDOM.createRoot(document.getElementById('root'));  // colocar esse componete na div id = "root"
// Render renderiza o componete <App/>
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

