import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import fd from '../img/fd.svg'
import tech from '../img/tech.svg'
import bar from '../img/bar.svg'
import tartan from '../img/tartan.jpg'
import doelle from '../img/doelle.jpg'
import sub from '../img/subs.png';


class Tech extends Component {
    render() {
        return (
            <div className='uk-animation-fade'>
                <Nav />
                <div className="uk-section uk-section-medium">
                    <div className="uk-container">
                        <div className="uk-text-left" data-uk-grid>
                            <div className="uk-width-1-2@m uk-hidden@m">
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        <img src={tech} alt="" />
                                    </div></div>
                            </div>
                            <div className="uk-width-1-2@m uk-margin-xlarge-top">
                                <img className='uk-visible@m' src={fd} alt="" width='400' />
                                <img className='uk-hidden@m' src={fd} alt="" width='300' />
                                <p className='black'>Fireworks Tech builds products that enable <br /> us tell stories effectively.</p>
                            </div>
                            <div className="uk-width-1-2@m uk-visible@m">
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        <img src={tech} alt="" />
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-default">
                    <div className="uk-container">
                        {/* <h3>Featured Case Studies</h3> */}
                        <h4><span><img src={bar} alt='' width='80' /></span> SELECTED PROJECTS</h4>
                        <div className="uk-grid-collapse uk-child-width-1-2@m" data-uk-grid>
                            <div className="uk-inline">
                                <img src={tartan} alt="" />
                                <div className="uk-overlay uk-light uk-position-top">
                                    <h2>Tartan</h2>
                                    <p className='white uk-hidden@m'>Branding<br /> UI/UX Design<br />Web Development</p>
                                </div>
                            </div>
                            <div className="uk-inline">
                                <img src={doelle} alt="" />
                                <div className="uk-overlay uk-light uk-position-top">
                                    <h2>Doelle</h2>
                                    <p className='white uk-hidden@m'>Branding<br /> UI/UX Design<br />Web Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img className='floating uk-align-left uk-overlay' src={sub} width='550px' style={{ marginTop: '0px', marginLeft: '-70px' }} />

                <div className="uk-section uk-section-large ">
                    <div className="uk-container uk-text-center">
                        <h1 className='uk-heading-primary'> Starting a new project?</h1>
                        <p>we would love to help you </p>
                        <a href='/contact' data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:200" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Lets Talk</span>  </a>
                       
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Tech;
