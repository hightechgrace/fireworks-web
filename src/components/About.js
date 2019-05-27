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

                <section className='uk-section-white uk-section-large fwk-home-section' style={{ paddingRight: '0' }}>
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
                <section className='uk-section-white uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >
                        <img src={team} alt="Image" />
                        <p>Fireworks is a creative digital media agency in Abuja that combines storytelling and technology to give meaningful experiences.
                            <br />
                            <br />
                            We blend creativity,strategy and technology to make brands stand out and get the attention they deserve. We are a team of
                            storytellers and technologists creating new ways to connect brands and their audiences.</p>
                    </div>
                </section>
                <section className='uk-section uk-section-small fwk-home-section' >
                    <div className="uk-container uk-container-xlarge" >

                        <div className="uk-grid-xlarge uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
                            <div>
                                <h2 className='uk-margin-large-top fwk-home-h2'>The Fireworks<br />
                                    vision & culture</h2>
                                <img style={{ marginTop: '40px', width: '80%' }} src={about_elements1} />
                            </div>
                            <div className='uk-text-left uk-padding-large'>
                                <h3 className='uk-margin-large-top fwk-home-h3'>01 Truth</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>
                                <h3 className='uk-margin-large-top fwk-home-h3'>02 Creativity</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>

                                <h3 className='uk-margin-large-top fwk-home-h3'>03 Passion</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>
                                <h3 className='uk-margin-large-top fwk-home-h3'>04 Excellence</h3>
                                <p className='uk-margin-large-bottom'>Neque porro quisquam est qui dolorem ipsum quia 
                                dolor sit amet, consectetur, adipisci velit </p>
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
                        <button class="uk-margin-large-left  uk-button uk-button-primary">Let's Talk</button>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
export default About;
