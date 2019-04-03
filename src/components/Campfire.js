import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
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
                            <p>Friday, April 5, 2019 5:00 PM – 7:00 PM </p>
                            <br />
                            <a href='https://www.eventbrite.com/e/campfire-an-interactive-gathering-of-creatives-entrepreneurs-tickets-59762325725' target='blank_' data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:500" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Register</span>  </a>
                            
                            {/* <h3>we would love to hear from you<br />

                                say <a className='underline red' href='https://www.eventbrite.com/e/campfire-an-interactive-gathering-of-creatives-entrepreneurs-tickets-59762325725'>hello@fireworks.com.ng</a>  <br />or if you want to speak with us on phone call <span className='underline red'>+234 8152 259 901</span></h3> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact;
