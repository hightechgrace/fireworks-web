import React from 'react';
import ReactDOM from 'react-dom';
import UIkit from 'uikit';
import style from 'uikit/dist/css/uikit.css'
import Icons from 'uikit/dist/js/uikit-icons';
import App from './components/App';
import Home from './components/Home';
import Video from './components/Video';
import Tech from './components/Tech';
import Studio from './components/Studio';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import YoungHome from './components/young/Index';
import Tori from './components/young/Tori';
import Pop from './components/young/Pop';
import Cafe from './components/young/Cafe';
import Waves from './components/young/Waves';
import Reactions from './components/young/Reactions';
import Campfire from './components/Campfire';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../src/custom.css'
import '../src/young.css'
UIkit.use(Icons);

const Fireworks = () => {
    return(
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/tech" component={Tech} />
                <Route exact path="/studio" component={Studio} />
                <Route exact path="/video/:id" component={Video} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/young" component={YoungHome} />
                <Route exact path="/tori" component={Tori} />
                <Route exact path="/pop" component={Pop} />
                <Route exact path="/cafe" component={Cafe} />
                <Route exact path="/waves" component={Waves} />
                <Route exact path="/reactions" component={Reactions} />
                <Route exact path="/campfire" component={Campfire} />
            </Switch>
        </div>
    </Router>)
}

ReactDOM.render(<Fireworks />, document.getElementById('root'));
registerServiceWorker();
