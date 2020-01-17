import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Palette from './main/Palette';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Palette />
    </BrowserRouter>
    , document.getElementById('root'));
// serviceWorker.unregister();
serviceWorker.register();