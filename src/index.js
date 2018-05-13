import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import style from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons';
import App from './components/App';
import Home from './components/Home';
import Creative from './components/Creative';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../src/custom.css'
UIkit.use(Icons);

const Fireworks = () => {
    return(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/creative" component={Creative} />
            </Switch>
        </div>
    </Router>)
}

ReactDOM.render(<Fireworks />, document.getElementById('root'));
registerServiceWorker();
