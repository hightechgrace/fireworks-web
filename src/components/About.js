import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/NewFooter'
import about_elements from '../img/about_elements.svg'
import about_elements1 from '../img/about_elements1.svg'
import team from '../img/team.png'



class About extends Component {
    render() {
        return (
            <div>
                <Nav/>

                <section className='uk-visible@m uk-section-white uk-section-large fwk-home-section' style={{ paddingRight: '0' }}>
                    <div className="uk-container uk-container-xlarge" style={{ paddingRight: '0', marginRight: '0' }}>
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-2-3@m uk-flex-first ">
                                <div><h6 style={{ letterSpacing: '5px', marginLeft: '-50px' }}>WHO WE ARE</h6></div>
                                <h1 className='header-txt'>An agile team <br />
                                    creating meaningful <br />
                                    experiences.</h1>
                                <p>Building awesomeness right in the<br />
                                    capital city of Abuja. </p>
                            </div>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <img src={about_elements} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-hidden@m uk-section-white uk-section-large' >
                    <div className="uk-container uk-container-xlarge" >
                        <div className="uk-flex-middle" data-uk-grid>
                            <div className="uk-width-2-3@m uk-flex-first ">
                                <div><h6 style={{ letterSpacing: '5px'}}>WHO WE ARE</h6></div>
                                <h1 className='mobile-header-txt'>An agile team <br />
                                    creating meaningful <br />
                                    experiences.</h1>
                                <p>Building awesomeness right in the<br />
                                    capital city of Abuja. </p>
                            </div>
                            <div className="uk-width-1-3@m uk-flex-first">
                                <img src={about_elements} alt="Image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-section-white uk-section-small' >
                    <div className="uk-container uk-container-xlarge" >
                        <img src={team} alt="Image" />
                        <p>Fireworks is a creative digital media agency in Abuja that combines storytelling and technology to give meaningful experiences.
                            <br />
                            <br />
                            We blend creativity,strategy and technology to make brands stand out and get the attention they deserve. We are a team of
                            storytellers and technologists creating new ways to connect brands and their audiences.</p>
                    </div>
                </section>
                <section className='uk-section uk-section-small' >
                    <div className="uk-container uk-container-xlarge" >

                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div>
                                <h2 className='uk-margin-large-top fwk-mobile-home-h2 uk-text-left'>The Fireworks<br />
                                    vision & culture</h2>
                                <img style={{ marginTop: '-20px', width: '80%' }} src={about_elements1} />
                            </div>
                            <div className='uk-text-left uk-padding-large' style={{ marginTop: '-150px'}}>
                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>01 Truth</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>
                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>02 Creativity</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>

                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>03 Passion</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>
                                <h3 className='uk-margin-large-top fwk-mobile-home-h3'>04 Excellence</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='uk-visible@m uk-section-secondary uk-section-large fwk-home-section' style={{ backgroundColor: '#000000' }}>
          <div className="uk-container uk-container-xlarge" >
            <div className="uk-text-left uk-margin-large-bottom" data-uk-grid>
              <div className="uk-width-1-2@m">
                <h2>Ready to launch an idea?</h2>
              </div>
              <div className="uk-width-1-2@m">
                <p>We’re excited to build amazing things with you!<br />
                  Call us on +234 8152 259 901 or <br />
                  say hello@fireworks.com.ng</p>
                <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>
              </div>
            </div>
            <hr />
          </div>
        </section>
        <section className='uk-hidden@m uk-section-secondary uk-section-large ' style={{ backgroundColor: '#000000' }}>
          <div className="uk-container uk-container-xlarge" >
            <div className="uk-text-left uk-margin-large-bottom" data-uk-grid>
              <div className="uk-width-1-2@m">
                <h2>Ready to launch an idea?</h2>
              </div>
              <div className="uk-width-1-2@m">
                <p>We’re excited to build amazing things with you!<br />
                  Call us on +234 8152 259 901 or <br />
                  say hello@fireworks.com.ng</p>
                <a href='/contact' className="uk-button uk-button-primary">Let's Talk</a>
              </div>
            </div>
            <hr />
          </div>
        </section>
                <Footer />
            </div>
        )
    }
}
export default About;
