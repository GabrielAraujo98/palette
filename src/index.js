import React from 'react';
import './index.css';
import Palette from './main/Palette';
import * as serviceWorker from './service-worker.js';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
// require('dotenv').config()

root.render(
    <StrictMode>
        <Palette />
    </StrictMode>);
serviceWorker.register();