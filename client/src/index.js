import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import {createRoot} from 'react-dom/client';


import './Styles/index.scss';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//     <App />
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);