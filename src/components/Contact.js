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
                        <h4><span><img src={bar} alt='' width='80' /></span> CONTACT</h4>


                            <h1 className='uk-text-left uk-heading-primary'>Starting a new project or looking <br/>
for a creative and digital partner </h1><br/>
<br/>
<h3>we would love to hear from you<br/>

say <a className='underline red' href = 'mailto:hello@fireworks.com.ng'>hello@fireworks.com.ng</a>  <br/>or if you want to speak with us on phone call <span className='underline red'>+234 8099 999 999</span></h3>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact;
