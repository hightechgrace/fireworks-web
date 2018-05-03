import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import style from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
UIkit.use(Icons);

const fireworks = () =>{
<Router>
    <div>
        <Switch>
        </Switch>
    </div>
</Router>

    
}

ReactDOM.render(<fireworks />, document.getElementById('root'));
registerServiceWorker();
