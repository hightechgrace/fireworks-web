import React, { Component } from 'react';
import logo from './images.png';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Active from './Components/Active';
import Parent from './Components/Parent';
import Item from './Components/Item';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
        <nav className="uk-navbar-container uk-margin" data-uk-navbar>
       <div className="uk-navbar-center">

        <div className="uk-navbar-center-left"><div>
            <ul className="uk-navbar-nav">

             <li><NavLink to="/">Active</NavLink></li>
             <li><NavLink to="/Parent">Parent</NavLink></li>

             </ul>
        </div></div>
        <a className="uk-navbar-item uk-logo" href="#">Logo</a>
        <div className="uk-navbar-center-right"><div>
            <ul className="uk-navbar-nav">
                <li><NavLink to="/Item">Item </NavLink></li>
            </ul>
        </div></div>

    </div>
</nav>


<Switch>
<Route path="/"  exact  render={Active}/>
<Route path="/Parent"   render={Parent}/>
<Route path="/Item"   render={Item}/>



</Switch>


<div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
<div>
            <div class="uk-width-1-1 uk-padding-large headerIndex" > </div>
            </div>
</div>


<div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
            
 <div>
        <div class="uk-background-muted uk-padding">Item</div>
    </div>
    <div>
        <div class="uk-background-primary uk-padding uk-light">Item</div>
    </div>
    <div>
        <div class="uk-background-secondary uk-padding uk-light">Item</div>
    </div>
</div>
      </div>

     



    );
  }
}

export default App;
