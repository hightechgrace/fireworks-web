import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import bar from '../img/bar.svg'


class Contact extends Component {
    render() {
        return (
            <div className='uk-animation-fade'>
                <Nav />
                <div className="uk-section " data-uk-height-viewport>
                    <div className="uk-container uk-margin-left uk-margin-right">
                        <div className="uk-dark uk-position-center-left uk-margin-large-left">
                            <h4><span><img src={bar} alt='' width='80' /></span> CAMPFIRE</h4>


                            <h1 className='uk-text-left uk-heading-primary'>An Interactive Gathering of <br />Creatives & Entrepreneurs </h1><br />
                            <p>Fri, November 1, 2019,  5:00 PM – 7:00 PM </p>
                            <br />
                            <a href='https://www.eventbrite.com/e/campfire-an-interactive-gathering-of-creative-entrepreneurs-tickets-79196790733?aff=affiliate1' target='blank_' className="uk-button uk-button-secondary">Register</a>
                        </div>
                    </div>
                </div>
                <section className='uk-visible@m uk-section-secondary uk-section-large fwk-home-section' style={{ backgroundColor: '#000000' }}>
          <div className="uk-container uk-container-xlarge" >
            <div className="uk-text-left uk-margin-large-bottom" data-uk-grid>
              <div className="uk-width-1-2@m">
                <h2>Ready to launch an idea?</h2>
              </div>
              <div className="uk-width-1-2@m">
                <p>We’re excited to build amazing things with you!<br />
                  Call us on +234 8152 259 901 or <br />
                  say hello@fireworks.com.ng</p>
                <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>
              </div>
            </div>
            <hr />
          </div>
        </section>
        <section className='uk-hidden@m uk-section-secondary uk-section-large ' style={{ backgroundColor: '#000000' }}>
          <div className="uk-container uk-container-xlarge" >
            <div className="uk-text-left uk-margin-large-bottom" data-uk-grid>
              <div className="uk-width-1-2@m">
                <h2>Ready to launch an idea?</h2>
              </div>
              <div className="uk-width-1-2@m">
                <p>We’re excited to build amazing things with you!<br />
                  Call us on +234 8152 259 901 or <br />
                  say hello@fireworks.com.ng</p>
                <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>
              </div>
            </div>
            <hr />
          </div>
        </section>
                <Footer />
            </div>
        )
    }
}
export default Contact;
