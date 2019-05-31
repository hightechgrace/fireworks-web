import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import firex from '../img/firex_bg.png'
import Zinox from '../img/zinox_product_1.png';
import Doelle from '../img/doelle_product_1.png';
import x1 from '../img/x1.png';
import x2 from '../img/x2.png';
import x3 from '../img/x3.png';
import video_firex from '../img/video_firex.png';


class Firex extends Component {
    render() {
        return (
            <div>
                <Nav/>

                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>OUR ARMS</h6></div>
                                <h1 className='header-txt'>FireX</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={firex} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small '>
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px'}}>OUR ARMS</h6></div>
                                <h1 className='mobile-header-txt'>FireX</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={firex} alt="Image" />
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
                                <h2>We create and deliver unique live experiences.
 </h2>
                                <p>From corporate events to brand launches, we’ve got the skills and manpower to
deliver unique live experiences to your audience.
                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul className="box">
                                    <li>Live Events</li>
                                    <li>Corporate Events</li>
                                    <li>Forums & Summits</li>
                                    <li>Exhibitions</li>
                                    <li>Brand Launches</li>
                                    <li>Product Launches</li>
                                </ul>
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <div className="uk-child-width-1-3@m uk-text-center uk-grid-small" data-uk-grid>
                                    <div>
                                        <img src={x1} />
                                    </div>
                                    <div>
                                        <img src={x2} />
                                    </div>
                                    <div>
                                        <img src={x3} />
                                    </div>

                                </div>
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
                                <h2>We create and deliver unique live experiences.
 </h2>
                                <p>From corporate events to brand launches, we’ve got the skills and manpower to
deliver unique live experiences to your audience.
                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul className="box">
                                    <li>Live Events</li>
                                    <li>Corporate Events</li>
                                    <li>Forums & Summits</li>
                                    <li>Exhibitions</li>
                                    <li>Brand Launches</li>
                                    <li>Product Launches</li>
                                </ul>
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <div className="uk-child-width-1-3@m uk-text-center uk-grid-small" data-uk-grid>
                                    <div>
                                        <img src={x1} />
                                    </div>
                                    <div>
                                        <img src={x2} />
                                    </div>
                                    <div>
                                        <img src={x3} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-visible@m uk-section-muted uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <h2 className='uk-margin-large-top fwk-home-h2'>Recent Work.</h2>
                        <div className="uk-text-center" data-uk-grid>

                            <div className="uk-width-1-2@m uk-text-left">
                                <h2 className='uk-margin-large-top fwk-home-h2'>Bonfire.</h2>
                                <p>A Conference for  Creatives and Enterprenuers</p>

                            </div>
                            <div className="uk-width-1-2@m uk-text-right">
                                <h2 className='uk-margin-large-top fwk-home-h4' >21st - 23rd Nov. 2019.</h2>
                                <p>International Conference Center Abuja</p>

                            </div>
                            <div className='uk-width-1-1'>
                            <a data-uk-toggle="target: #modal-media-youtube"><img src={video_firex} /></a>
                            <div id="modal-media-youtube" className="uk-flex-top" data-uk-modal>
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                                        <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4" width="560" height="315" frameBorder="0" data-uk-video></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-margin-xlarge  uk-text-center'>
                            <a href=''>View More</a>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-muted uk-section-small' >
                    <div className="uk-container uk-container-xlarge" >
                        <h2 className='uk-margin-large-top fwk-mobile-home-h2'>Recent Work.</h2>
                        <div className="uk-text-center" data-uk-grid>

                            <div className="uk-width-1-2@m uk-text-left">
                                <h2 className='uk-margin-large-top fwk-mobile-home-h2'>Bonfire.</h2>
                                <p>A Conference for  Creatives and Enterprenuers</p>

                            </div>
                            <div className="uk-width-1-2@m uk-text-left">
                                <h2 className=' fwk-mobile-home-h4' >21st - 23rd Nov. 2019.</h2>
                                <p>International Conference Center Abuja</p>

                            </div>
                            <div className='uk-width-1-1'>
                            <a data-uk-toggle="target: #mobile-media-youtube"><img src={video_firex} /></a>
                            <div id="mobile-media-youtube" className="uk-flex-top" data-uk-modal>
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                                        <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4" width="100%" height="315" frameBorder="0" data-uk-video></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='uk-margin-xlarge  uk-text-center'>
                            <a href=''>View More</a>
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
export default Firex;
