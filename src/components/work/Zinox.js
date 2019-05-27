import React, { Component } from 'react';
import Nav from '../common/Nav'
import Footer from '../common/NewFooter'
import zinoxBG from '../../img/zinox_bg.png'
import Zinox from '../../img/zinox_product_1.png';
import Doelle from '../../img/doelle_product_1.png';
import zinox_banner from '../../img/zinox_banner.png';
import zinox_page from '../../img/zinox_webpage.png';
import zinox_page2 from '../../img/zinox_webpage2.png';
import zinox_page3 from '../../img/zinox_webpage3.svg';
import zinox_page4 from '../../img/zinox_webpage4.png';



class Creative extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <section className='uk-section-white uk-section-small fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>CASE STUDY</h6></div>
                                <h1 className='header-txt'>Zinox</h1>
                                <h5>SERVICE</h5>
                                <p>Website Design & Development</p>
                                <h5>OUR ROLE</h5>
                                <p>UI/UX Design<br />Web Development<br />Design Direction</p>
                            </div>
                            <div className="uk-width-2-3@m uk-flex-first">
                                <img src={zinoxBG} alt="Image" />
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
                                <h2>Redesigning the Web Experience for one of
The Biggest Original Equipment Manufacturers
(OEM) in Africa</h2>
                                <p>The Challenge was to Build a new website that has a fresh new design and feel.
That showcases  the products they have and enable users to experience these
products.The website had to be engaging and encourage users to buy products
displayed
                                    </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <img src={zinox_banner} />
                </section>
                <section className='uk-section-white uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <img src={zinox_page} />
                        <div className="uk-child-width-1-2 uk-text-left uk-margin-large-top" data-uk-grid>
                            <div>
                                <h3>Our Approach</h3>
                                <p>We worked with the Zinox Team using UX methods to  clearly
                                    understand their needs, create Wireframes, mockups and
                                    prototypes and review them with the Zinox team, after the
                                    prototypes were satisfactorily done, the website Was built based
                                    on the chosen website design. It was a fully user centred
                                    Designed approach.</p>
                            </div>
                            <div >
                                <div className="uk-child-width-1-2 uk-text-left" data-uk-grid>
                                    <div>
                                        <h3> </h3>

                                        - Setting goals and objectives<br />
                                        - Stakeholder interviews<br />
                                        - Establishing key audiences<br />
                                        - Wireframes<br />
                                        - Creating scenarios<br />
                                        - Creating site maps<br />

                                    </div>
                                    <div>
                                        <h3> </h3>

                                        - Conducting  research<br />
                                        - Low- fidelity prototypes<br />
                                        - Creating wireframes<br />
                                        - High- fidelity design & guidelines<br />
                                        - Usability testing<br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-section-white uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <img src={zinox_page2} />
                    </div>
                </section>
                <section className='uk-section-white uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-child-width-1-2 uk-text-left uk-margin-large-top" data-uk-grid>
                            <div>
                                <h3>Brand Audience in mind</h3>
                                <p>After identifying our key audience who are primarily 
Africans, we chose to showcase the battery life of 
each devices considering the massive power issues 
in Africa, battery life Is a key determinant for costumers. 

</p>
                                    <img src={zinox_page3} />

                            </div>
                            <div >
                                    <img src={zinox_page4} />
                            </div>
                        </div>
                    </div>
                </section>


                <section className='uk-section-muted uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <h2 className='uk-margin-large-top fwk-home-h2'>Other Work.</h2>
                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div className="uk-inline uk-text-left uk-padding-large">
                                <h1 >Doelle</h1>
                                <p>UI/UX Design.  Web Development</p>
                                <img src={Doelle} />
                            </div>
                        </div>
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
export default Creative;
