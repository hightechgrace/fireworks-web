import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'

class Contact extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="uk-section uk-section-large" data-uk-height-viewport>
                    <div className="uk-container uk-container-large uk-margin-left uk-margin-right">
                        <div className="uk-dark uk-position-center-left uk-margin-large-left">
                            <h3>CONTACT </h3>

                            <h1 className='uk-text-left uk-heading-primary'>Starting a new project or looking <br/>
for a creative and digital partner </h1>
<h3>we would love to hear from you<br/>

say hello@fireworks.com.ng.  <br/>or if you want to speak with us on phone call +234 8099 999 999</h3>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact;
