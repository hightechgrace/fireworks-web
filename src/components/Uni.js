import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import fireworksu from '../img/fireworksu_bg.png'


class Uni extends Component {
    render() {
        return (
            <div>
                <Nav />

                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>FIREWORKS UNIVERSITY</h6></div>
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
                                <div><h6 style={{ letterSpacing: '5px' }}>FIREWORKS UNIVERSITY</h6></div>
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
                            {/* <div className="uk-width-2-5@m uk-flex-first">
                            </div> */}
                            <div className="uk-width-1-1@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <h2>Arming individuals and organisations with
                                    knowledge and strategies to grow world class brands </h2>
                                    <iframe src="https://fireworks.typeform.com/to/HhxYEK" height="1080" width="100%"></iframe>

                            </div>
                        </div>
                        {/* <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
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
                        </div> */}
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

                                {/* <p>More Text Here
                                    </p> */}
                <iframe src="https://fireworks.typeform.com/to/HhxYEK" height="700" width="100%"></iframe>

                            </div>
                        </div>
                        {/* <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
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
                        </div> */}
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
                {/* <div class="typeform-widget" data-url="https://fireworks.typeform.com/to/HhxYEK" style={{width: '100%', height: '500px'}}></div> 
                <script> 
                (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() 
                </script> 
                <div style={{fontFamily: 'Sans-Serif',fontSize: '12px',color: '#999',opacity: '0.5',paddingTop: '5px'}}> </div> */}
                <Footer />
            </div>
        )
    }
}
export default Uni;
