import React, { Component } from 'react';
import Footer from './common/NewFooter'
import agency from '../img/agency_bg.png'
import Zinox from '../img/zinox_product_1.png';
import Doelle from '../img/doelle_product_1.png';
import Nav from '../components/common/Nav';



class Creative extends Component {
    render() {
        return (
            <div>
                <Nav />
                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>OUR ARMS</h6></div>
                                <h1 className='header-txt'>Creative Agency</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={agency} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small '>
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>OUR ARMS</h6></div>
                                <h1 className='mobile-header-txt'>Creative Agency</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={agency} alt="Image" />
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
                                <h2>A creative agency that helps brands <br />
                                    and businesses get the attention they deserve </h2>
                                <p>By combining creativity, strategy and innovation. Fireworks Creative Agency
                                    helps brands and businesses tell their stories to the world. We do deep work
                                    for brands that seek to be first and go further.
                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul class="box">
                                    <li>Branding & Identity</li>
                                    <li>Social Media Campaigns</li>
                                    <li>Content Creation</li>
                                    <li>Brand Storytelling</li>
                                </ul>
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <a href=''>View our Agency</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small ' >
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <h2>A creative agency that helps brands <br />
                                    and businesses get the attention they deserve </h2>
                                <p>By combining creativity, strategy and innovation. Fireworks Creative Agency
                                    helps brands and businesses tell their stories to the world. We do deep work
                                    for brands that seek to be first and go further.
                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul class="box">
                                    <li>Branding & Identity</li>
                                    <li>Social Media Campaigns</li>
                                    <li>Content Creation</li>
                                    <li>Brand Storytelling</li>
                                </ul>
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <a href=''>View our Agency</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-visible@m uk-section-muted uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <h2 className='uk-margin-large-top fwk-home-h2'>Recent Work.</h2>
                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h1 >Zinox</h1>
                                <p>UI/UX Design.  Web Development</p>
                                <img src={Zinox} />
                            </div>
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h1 >Doelle</h1>
                                <p>UI/UX Design.  Web Development</p>
                                <img src={Doelle} />
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
                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h1 >Zinox</h1>
                                <p>UI/UX Design.  Web Development</p>
                                <img src={Zinox} />
                            </div>
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h1 >Doelle</h1>
                                <p>UI/UX Design.  Web Development</p>
                                <img src={Doelle} />
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
                        <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>                    </div>
                </section>
                <section className='uk-hidden@m uk-section-secondary uk-section-xlarge' style={{ backgroundColor: '#171717' }}>
                    <div className="uk-container uk-container-xlarge" >
                        <div><h6 style={{ letterSpacing: '5px' }}>WORK WITH US</h6></div>
                        <h1 className='header-txt uk-margin-large-left'>Ready to launch an idea?</h1>
                        <h4 className='uk-margin-large-left'>We’re excited to build amazing things with you!<br />
                            Call us on +234 8152 259 901 or say hello@fireworks.com.ng</h4>
                        <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Creative;
