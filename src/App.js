import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="uk-margin-large-top">
        <header className="uk-margin">
          <h1 className="uk-heading-primary uk-align-bottom ">Welcome to React</h1>
          <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
    <div>
        <div className="uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">Default</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div className="uk-card uk-card-primary uk-card-body">
            <h3 className="uk-card-title">Primary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
    <div>
        <div className="uk-card uk-card-secondary uk-card-body">
            <h3 className="uk-card-title">Secondary</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
        </header>
        <p className="">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
