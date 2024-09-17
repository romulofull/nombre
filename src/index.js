import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// Renderiza el componente principal `App` dentro del elemento con id 'root' en el DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


