import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Correction majeure : On pointe vers le bon dossier pour le style
import './src/index.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);