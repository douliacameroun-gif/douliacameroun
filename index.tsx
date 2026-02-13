import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Correction effectuée : On pointe maintenant directement sur le fichier à la racine
import './index.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);