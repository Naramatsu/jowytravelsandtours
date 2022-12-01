import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'kromac-ui-18/src/css/style.css';
import Context from './context/Context';
import './index.style.scss';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <Context>
      <App />
    </Context>
  </>
);
