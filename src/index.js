import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import style from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
