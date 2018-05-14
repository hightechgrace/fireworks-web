import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import style from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons';
import App from './components/App';
import Home from './components/Home';
import Strategy from './components/Strategy';
import Creative from './components/Creative';
import Storytelling from './components/Storytelling';
import Digital from './components/Digital';
import About from './components/About';
import Contact from './components/Contact';
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
                <Route exact path="/strategy" component={Strategy} />
                <Route exact path="/storytelling" component={Storytelling} />
                <Route exact path="/digital" component={Digital} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </div>
    </Router>)
}

ReactDOM.render(<Fireworks />, document.getElementById('root'));
registerServiceWorker();
