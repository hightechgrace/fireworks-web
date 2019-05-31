import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import fireworksu from '../img/fireworksu_bg.png'


class Fireworksu extends Component {
    render() {
        return (
            <div>
                <Nav/>

                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>OUR ARMS</h6></div>
                                <h1 className='header-txt'>FireworksU</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={fireworksu} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small'>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px'}}>OUR ARMS</h6></div>
                                <h1 className='mobile-header-txt'>FireworksU</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={fireworksu} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <h2>Arming individuals and organisations with
                                    knowledge and strategies to grow world class brands </h2>

                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>COURSES</h6></div>
                                <ul class="box">
                                    <li>Design Thinking</li>
                                    <li>Web Development</li>
                                    <li>Leadership</li>
                                    <li>Photography</li>
                                    <li>Business Ideation</li>
                                    <li>Storytelling</li>
                                </ul>
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <p>More Text Here
                                    </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small' >
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <h2>Arming individuals and organisations with
                                    knowledge and strategies to grow world class brands </h2>

                                    <p>More Text Here
                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>COURSES</h6></div>
                                <ul class="box">
                                    <li>Design Thinking</li>
                                    <li>Web Development</li>
                                    <li>Leadership</li>
                                    <li>Photography</li>
                                    <li>Business Ideation</li>
                                    <li>Storytelling</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className='uk-visible@m uk-section-secondary uk-section-xlarge fwk-home-section' style={{ backgroundColor: '#171717' }}>
                    <div className="uk-container uk-container-xlarge" >
                        <div><h6 style={{ letterSpacing: '5px' }}>WORK WITH US</h6></div>
                        <h1 className='header-txt uk-margin-large-left'>Ready to launch an idea?</h1>
                        <h4 className='uk-margin-large-left'>We’re excited to build amazing things with you!<br />
                            Call us on +234 8152 259 901 or say hello@fireworks.com.ng</h4>
                        <button class="uk-margin-large-left  uk-button uk-button-primary">Let's Talk</button>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-secondary uk-section-xlarge' style={{ backgroundColor: '#171717' }}>
                    <div className="uk-container uk-container-xlarge" >
                        <div><h6 style={{ letterSpacing: '5px' }}>WORK WITH US</h6></div>
                        <h1 className='header-txt uk-margin-large-left'>Ready to launch an idea?</h1>
                        <h4 className='uk-margin-large-left'>We’re excited to build amazing things with you!<br />
                            Call us on +234 8152 259 901 or say hello@fireworks.com.ng</h4>
                        <button class="uk-margin-large-left  uk-button uk-button-primary">Let's Talk</button>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Fireworksu;
