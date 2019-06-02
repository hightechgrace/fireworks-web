import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import tech from '../img/tech_bg.png'
import Zinox from '../img/zinox_product_1.png';
import Doelle from '../img/doelle_product_1.png';
import video_tech from '../img/video_tech.png';
import tech_elements from '../img/tech_elements.svg';


class Creative extends Component {
    render() {
        return (
            <div>
                <Nav/>

                <section className='uk-visible@m uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>OUR ARMS</h6></div>
                                <h1 className='header-txt'>Technology</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={tech} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small' >
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px'}}>OUR ARMS</h6></div>
                                <h1 className='mobile-header-txt'>Technology</h1>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={tech} alt="Image" />
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
                                <h2>We blend design and technology to create<br />
                                    meaningful experiences for brands. </h2>
                                <p>Through excellent UI, UX, Design And Development, we create digital products
                                    That are aligned with our clients goals and strive to exceed their expectations. With a
                                    mission to create unforgettable digital experiences on web and mobile, we use a
                                    design-driven and research  led approach to deliver amazing results.
                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul class="box">
                                    <li>UI/UX Design</li>
                                    <li>Web Development</li>
                                    <li>Mobile Development</li>
                                    <li>SEO Services</li>
                                    <li>Insights & Analytics</li>
                                    <li>Content Management</li>
                                </ul>
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <a data-uk-toggle="target: #modal-media-youtube"><img src={video_tech} style={{ marginTop: '100px', marginBottom: '-100px' }} /></a>
                                <div id="modal-media-youtube" className="uk-flex-top" data-uk-modal>
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                                        <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4" width="560" height="315" frameBorder="0" data-uk-video></iframe>
                                    </div>
                                </div>                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-small' >
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <h2>We blend design and technology to create<br />
                                    meaningful experiences for brands. </h2>
                                <p>Through excellent UI, UX, Design And Development, we create digital products
                                    That are aligned with our clients goals and strive to exceed their expectations. With a
                                    mission to create unforgettable digital experiences on web and mobile, we use a
                                    design-driven and research  led approach to deliver amazing results.
                                    </p>
                            </div>
                        </div>
                        <div className="uk-flex-middle uk-margin-xlarge-top" data-uk-grid>
                            <div className="uk-width-2-5@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px' }}>SERVICES</h6></div>
                                <ul class="box">
                                    <li>UI/UX Design</li>
                                    <li>Web Development</li>
                                    <li>Mobile Development</li>
                                    <li>SEO Services</li>
                                    <li>Insights & Analytics</li>
                                    <li>Content Management</li>
                                </ul>
                            </div>
                            <div className="uk-width-3-5@m uk-flex-first uk-padding-large uk-padding-remove-vertical uk-padding-remove-right" >
                                <a data-uk-toggle="target: #mobile-media-youtube"><img src={video_tech} style={{marginBottom: '-100px' }} /></a>
                                <div id="mobile-media-youtube" className="uk-flex-top" data-uk-modal>
                                    <div className="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
                                        <button className="uk-modal-close-outside" type="button" data-uk-close></button>
                                        <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4" width="100%" height="315" frameBorder="0" data-uk-video></iframe>
                                    </div>
                                </div>                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-visible@m uk-section uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >

                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div>
                                <h2 className='uk-margin-large-top fwk-home-h2'>A Design-Driven <br />
                                    Creative Process.</h2>
                                    <img style={{marginTop:'-100px', width:'170%'}} src={tech_elements}/>
                            </div>
                            <div className='uk-text-left uk-padding-large'>
                                <h3 className='uk-margin-large-top fwk-home-h3'>01 Discover</h3>
                                <p className='uk-margin-large-bottom'>Our Process is totally user-centric. our goal
                                    Is to understand the needs of the client and
                                    Gain insights based on the needs and pain
                                    points stated </p>
                                <h3 className='uk-margin-large-top fwk-home-h3'>02 Define</h3>
                                <p className='uk-margin-large-bottom'>Once insights have been gained. We create
Problem definitions and this guides the rest
Of our efforts during design and development
and ensures that we work efficiently </p>

                                <h3 className='uk-margin-large-top fwk-home-h3'>03 Develop</h3>
                                <p className='uk-margin-large-bottom'>Our Dedicated team of Designers and developers
Come up with solutions that address the problem
statement and solve the pain points. This phase
includes prototyping, testing and iteration.  Because
of The methods we deploy during development and
design, we are pretty proud of the products we ship. </p>
                                <h3 className='uk-margin-large-top fwk-home-h3'>04 Deploy</h3>
                                <p className='uk-margin-large-bottom'>
                                During deployment, we ensure that the product
Is tested and meets with the acceptable client criteria. 
 </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section uk-section-small' >
                    <div className="uk-container uk-container-xlarge" >

                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-left" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div>
                                <h2 className='uk-margin-large-top fwk-mobile-home-h2'>A Design-Driven <br />
                                    Creative Process.</h2>
                                    {/* <img style={{marginTop:'-100px', width:'170%'}} src={tech_elements}/> */}
                            </div>
                            <div className='uk-text-left uk-padding-large' >
                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>01 Discover</h3>
                                <p className='uk-margin-large-bottom'>Our Process is totally user-centric. our goal
                                    Is to understand the needs of the client and
                                    Gain insights based on the needs and pain
                                    points stated </p>
                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>02 Define</h3>
                                <p className='uk-margin-large-bottom'>Once insights have been gained. We create
Problem definitions and this guides the rest
Of our efforts during design and development
and ensures that we work efficiently </p>

                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>03 Develop</h3>
                                <p className='uk-margin-large-bottom'>Our Dedicated team of Designers and developers
Come up with solutions that address the problem
statement and solve the pain points. This phase
includes prototyping, testing and iteration.  Because
of The methods we deploy during development and
design, we are pretty proud of the products we ship. </p>
                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>04 Deploy</h3>
                                <p className='uk-margin-large-bottom'>
                                During deployment, we ensure that the product
Is tested and meets with the acceptable client criteria. 
 </p>
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
export default Creative;
