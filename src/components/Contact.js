import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import about from '../img/about_bg.png'
import contact_elements from '../img/contact_elements.svg';
import Doelle from '../img/doelle_product_1.png';


class Contact extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-3-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>TALK TO US</h6></div>
                                <h1 className='header-txt'>Starting a new <br />
                                    project or looking <br />
                                    for a creative <br />
                                    partner</h1>
                                <p>Tell us about your next project</p>
                                <h3>Call us on +234 8152 259 901 or say hello@fireworks.com.ng<br /><br />
                                    Or fill the form below</h3>
                                <form className='uk-width-2-3'>
                                    <fieldset className="uk-fieldset">
                                        <div className="uk-margin">
                                            <input className="uk-input fwk-input" type="text" placeholder="Name" />
                                        </div>
                                        <div className="uk-margin">
                                            <input className="uk-input fwk-input" type="text" placeholder="Email" />
                                        </div>
                                        <div className="uk-margin">
                                            <input className="uk-input fwk-input" type="text" placeholder="Company Name" />
                                        </div>
                                        <div className="uk-margin">
                                            <textarea className="uk-textarea fwk-input" rows="8" placeholder="Project Details (Scope, timelines etc) "></textarea>
                                        </div>
                            <button class="uk-button uk-button-secondary">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <img src={about} alt="Image" />
                                <img className='uk-padding-large' src={contact_elements} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='uk-hidden@m uk-section-white uk-section-small'>
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-3-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px'}}>TALK TO US</h6></div>
                                <h1 className='mobile-header-txt'>Starting a new <br />
                                    project or looking <br />
                                    for a creative <br />
                                    partner</h1>
                                <p>Tell us about your next project</p>
                                <h4>Call us on +234 8152 259 901 or say hello@fireworks.com.ng<br /><br />
                                    Or fill the form below</h4>
                                <form className='uk-width-2-3@m'>
                                    <fieldset className="uk-fieldset">
                                        <div className="uk-margin">
                                            <input className="uk-input fwk-input" type="text" placeholder="Name" />
                                        </div>
                                        <div className="uk-margin">
                                            <input className="uk-input fwk-input" type="text" placeholder="Email" />
                                        </div>
                                        <div className="uk-margin">
                                            <input className="uk-input fwk-input" type="text" placeholder="Company Name" />
                                        </div>
                                        <div className="uk-margin">
                                            <textarea className="uk-textarea fwk-input" rows="8" placeholder="Project Details (Scope, timelines etc) "></textarea>
                                        </div>
                            <button class="uk-button uk-button-secondary">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                            <div className="uk-width-2-5@m uk-flex-first">
                                {/* <img src={about} alt="Image" /> */}
                                <img className='uk-padding-large' src={contact_elements} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                
               
               
                <Footer />
            </div>
        )
    }
}
export default Contact;
