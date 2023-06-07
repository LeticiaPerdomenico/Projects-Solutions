import React from 'react';
import {createRoot} from 'react-dom/client';
/*14*/
import app from './app.js';
createRoot(
  document.getElementById('app')
).render(<app/>);