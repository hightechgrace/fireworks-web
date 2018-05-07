import React, { Component } from 'react';
import vid from '../img/vid.mp4'
import logo from '../img/fire_black.svg';
class App extends Component {
  render() {
    return (

      <div className="uk-position-relative">
        <div className="uk-cover-container" data-uk-height-viewport>
          <video autoPlay loop muted playsInline data-uk-cover>
            <source src={vid} type="video/mp4" />
          </video>
          <div class="uk-overlay uk-dark uk-position-center">
            <img style={{ marginRight: 'auto', marginLeft: 'auto', display: 'block' }} src={logo} width='400' />

            <h3 className='uk-text-center'>By combining Storytelling (the oldest form of communication) and <br />
              Technology (the art, craft and skills of using science to solve problems) <br />
              we create a shared future and provide meaningful experiences.<br /> </h3>
              <h3 className='uk-text-center uk-margin-xlarge-top'><a href='/home'>Enter site</a></h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
