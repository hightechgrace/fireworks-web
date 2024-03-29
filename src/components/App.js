import React, { Component } from 'react';
import vid from '../img/vid.mp4'
import logo from '../img/fire_black.svg';
import astro from '../img/astro.png';
import Planet1 from '../img/Planet1.png';
import Planet2 from '../img/Planet2.png';
import FireText from '../img/fire_text.svg';
class App extends Component {
  render() {
    return (

      <div className="uk-position-relative">
        <div className="uk-cover-container" style={{backgroundColor:'#fff'}} data-uk-height-viewport>
          {/* <video autoPlay loop muted playsInline data-uk-cover>
            <source src={vid} type="video/mp4" />
          </video> */}
          <div className="uk-overlay uk-dark uk-position-center">
            <img className='app-logo' src={logo} width='120' />
            {/* <img className='app-logo' src={FireText} width='' style={{marginBottom:'-130px'}} /> */}
            <img className='floating planet2 uk-margin-xlarge-bottom' src={Planet1} width='80' />
            <img className='floating' src={astro} width='350px' />
            <img className='floating planet1 uk-margin-xlarge-top' src={Planet2} width='40' />
            

            <h5 className='uk-text-center'>We combine <span className='red underline'>Storytelling</span>  and <span className='red underline'>Technology</span> <br />
              to create <span className='red underline'>meaningful experiences</span> for brands.<br /> </h5>
              
            <div className="uk-flex uk-flex-center">
              <div>
                <h5 className='uk-text-center uk-margin-small-top'><a className='home-link' href='/home'>Enter Site</a></h5>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
