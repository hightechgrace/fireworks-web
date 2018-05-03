import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import uikit from 'uikit';
import {BrowserRouter}  from 'react-router-dom';
import styles from 'uikit/dist/css/uikit.css'
import icons from 'uikit/dist/js/uikit-icons'
import registerServiceWorker from './registerServiceWorker';
uikit.use(icons);

const app =(
<BrowserRouter>
<App />
</BrowserRouter>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
