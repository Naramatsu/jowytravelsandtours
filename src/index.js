import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'kromac-ui/dist/index.css';
import './css/index.style.css';
import './css/index.style.css.map';
import Context from './context/Context';

ReactDOM.render(
  <>
    <Context>
      <App />
    </Context>
  </>,
  document.getElementById('root'),
);
