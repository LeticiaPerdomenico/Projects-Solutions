import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store } from './app/store.js';
// Add import statement below
/*1*/
import { Provider } from 'react-redux';

ReactDOM.render(
  // Implement Provider component with store below
  /*2*/
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
