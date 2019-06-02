import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import studio from '../img/studio_bg.png'
import studioVideo from '../img/video_studio.png';
import jarell from '../img/jarell.png';
import lava from '../img/lava.png';


class Studio extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>OUR ARMS</h6></div>
                                <h1 className='header-txt'>Studio</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={studio} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small'>
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px'}}>OUR ARMS</h6></div>
                                <h1 className='mobile-header-txt'>Studio</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={studio} alt="Image" />
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
                                <h2>Telling authentic African stories through film and photography </h2>
                                <p>Fireworks Studios tells authentic African stories through film and photography.
                                    We are dedicated to creating and documenting authentic African narratives
                                    that helps shape the future of our continent.

                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-1-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul className="box">
                                    <li> Photography</li>
                                    <li>Film</li>
                                    <li>TV</li>
                                    <li>Documentaries</li>
                                    <li>Music videos </li>
                                    <li>Commercials</li>
                                </ul>
                            </div>
                            <div className="uk-width-4-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <a data-uk-toggle="target: #modal-media-youtube"><img width='80%'  src={studioVideo} style={{ marginTop: '100px', marginBottom: '-100px' }} /></a>
                                <div id="modal-media-youtube" className="uk-flex-top" data-uk-modal>
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                                        <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4" width="560" height="315" frameBorder="0" data-uk-video></iframe>
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
                                <h2>Telling authentic African stories through film and photography </h2>
                                <p>Fireworks Studios tells authentic African stories through film and photography.
                                    We are dedicated to creating and documenting authentic African narratives
                                    that helps shape the future of our continent.

                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-1-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul className="box">
                                    <li> Photography</li>
                                    <li>Film</li>
                                    <li>TV</li>
                                    <li>Documentaries</li>
                                    <li>Music videos </li>
                                    <li>Commercials</li>
                                </ul>
                            </div>
                            <div className="uk-width-4-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <a data-uk-toggle="target: #mobile-media-youtube"><img width='100%'  src={studioVideo} style={{ marginBottom: '-100px' }} /></a>
                                <div id="mobile-media-youtube" className="uk-flex-top" data-uk-modal>
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                                        <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4" width="100%" height="315" frameBorder="0" data-uk-video></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-visible@m uk-section-muted uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <h2 className='uk-margin-large-top fwk-home-h2'>Recent Work.</h2>
                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h1 >Jarell Ebuka</h1>
                                <p>Music Documentary</p>
                                <img src={jarell} />
                            </div>
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h1 >Lava Energy Drink</h1>
                                <p>Commercial . Photography</p>
                                <img src={lava} />
                            </div>
                        </div>
                        <div className='uk-margin-xlarge  uk-text-center ' >
                            <a href=''>View More</a>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-muted uk-section-small' >
                    <div className="uk-container uk-container-xlarge" >
                        <h2 className='uk-margin-xlarge-top fwk-mobile-home-h2'>Recent Work.</h2>
                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h2 >Jarell Ebuka</h2>
                                <p>Music Documentary</p>
                                <img src={jarell} />
                            </div>
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h2 >Lava Energy Drink</h2>
                                <p>Commercial . Photography</p>
                                <img src={lava} />
                            </div>
                        </div>
                        <div className='uk-margin-xlarge  uk-text-center ' >
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
                            <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-secondary uk-section-xlarge' style={{ backgroundColor: '#171717' }}>
                    <div className="uk-container uk-container-xlarge" >
                        <div><h6 style={{ letterSpacing: '5px' }}>WORK WITH US</h6></div>
                        <h1 className='header-txt uk-margin-large-left'>Ready to launch an idea?</h1>
                        <h4 className='uk-margin-large-left'>We’re excited to build amazing things with you!<br />
                            Call us on +234 8152 259 901 or say hello@fireworks.com.ng</h4>
                            <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Studio;
