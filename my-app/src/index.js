import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom"
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.render(
 
    <HashRouter>
    <App />
    </HashRouter>,
  document.getElementById('root')
);
