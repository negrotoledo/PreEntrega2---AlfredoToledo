import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App'; // Asegúrate de que la ruta sea correcta
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product-grid.css'; 


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
