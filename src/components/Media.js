import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import media from '../img/media_bg.png'
import Zinox from '../img/zinox_product_1.png';
import Doelle from '../img/doelle_product_1.png';
import cafe_logo from '../img/cafe_logo.svg';
import waves_logo from '../img/waves_logo.svg';
import react_logo from '../img/react_logo.svg';
import pop_logo from '../img/pop_logo.svg';
import tori_logo from '../img/tori_logo.svg';


class Media extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <section className='uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>OUR ARMS</h6></div>
                                <h1 className='header-txt'>Media</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={media} alt="Image" alt=''/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-section-white uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <h2>Telling authentic African stories through film and photography</h2>
                                <p>Fireworks Media is dedicated to building media brands that shape the African cultural
zeitgeist and narrative through authentic, inspiring and engaging storytelling.

                                    </p>
                            </div>
                        </div>
                        <div><h6 style={{ letterSpacing: '5px' }}>OUR BRANDS</h6></div>

                        <div className="uk-text-center uk-grid-match" data-uk-grid>
                            <div className="uk-width-1-5@m">
                            <img className='uk-padding' src={cafe_logo} alt=''/>
                            </div>
                            <div className="uk-width-1-5@m">
                            <img className='uk-padding' src={waves_logo} alt=''/>
                            </div>
                            <div className="uk-width-1-5@m">
                            <img className='uk-padding' src={react_logo} alt=''/>
                            </div>
                            <div className="uk-width-1-5@m">
                            <img className='uk-padding' src={pop_logo} alt=''/>
                            </div>
                            <div className="uk-width-1-5@m">
                            <img className='uk-padding' src={tori_logo} alt=''/>
                            </div>
                        </div>
                        <a href='http://young.co' target='blank_'>View Our Brands</a>
                        
                    </div>
                </section>
                <section className='uk-section-secondary uk-section-xlarge fwk-home-section' style={{ backgroundColor: '#171717' }}>
                    <div className="uk-container uk-container-xlarge" >
                        <div><h6 style={{ letterSpacing: '5px' }}>WORK WITH US</h6></div>
                        <h1 className='header-txt uk-margin-large-left'>Ready to launch an idea?</h1>
                        <h4 className='uk-margin-large-left'>We’re excited to build amazing things with you!<br />
                            Call us on +234 8152 259 901 or say hello@fireworks.com.ng</h4>
                        <button className="uk-margin-large-left  uk-button uk-button-primary">Let's Talk</button>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default Media;
