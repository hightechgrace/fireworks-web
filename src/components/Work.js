import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import tech from '../img/tech.svg'
import bar from '../img/bar.svg'
import tartan from '../img/tartan.jpg'
import doelle from '../img/doelle.jpg'
import sub from '../img/subs.png';
import ferdy from '../img/ferdy.jpg';
import cyrus from '../img/cyrus.jpg';
import akin from '../img/akin.jpg';
import chude from '../img/chude.jpg';
import bonfire from '../img/Bonfire.jpg';


class Work extends Component {
    render() {
        return (
            <div className='uk-animation-fade'>
                <Nav />
                <div className="uk-section uk-section-medium">
                    <div className="uk-container">
                        <div className="uk-text-left" data-uk-grid>

                            <div className="uk-width-1-2@m uk-margin-xlarge-top">
                                <h1 className='uk-text-left uk-heading-primary'>Our Work </h1>
                                <h3 className=''>How we’re helping clients solve business problems </h3>

                                <p className='black'>Our goal is to create content that works using our expertise in branding, web design, development and storytelling, We develop a custom solutions catered to meet your brand and business goals.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-default">
                    <div className="uk-container">
                        <h6><span><img src={bar} alt='' width='80' /></span> BRANDING.     UI/UX.     WEB DEVELOPMENT</h6>
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
                        <br/>
                        <br/>
                        <h6><span><img src={bar} alt='' width='80' /></span> STORYTELLING.   FEATURE FILMS.    AD FEATURES</h6>
                        <div className=" uk-child-width-1-2@m" data-uk-grid>
                        
                            <a href='/video/chude-jideonwo'>
                            <div className="uk-inline">
                                <img src={chude} alt="" />
                            </div>
                            </a>
                            <a href='/video/ferdy-adimefe'>
                            <div className="uk-inline">
                                <img src={ferdy} alt="" />
                            </div>
                            </a>
                            <a href='/video/bonfire'>
                            <div className="uk-inline">
                                <img src={bonfire} alt="" />
                            </div>
                           </a>

                            
                            <a href='/video/akinlabi-akinbulumo'>
                            <div className="uk-inline">
                                <img src={akin} alt="" />
                            </div>
</a>

                            <a href='/video/cyrus-agbo'>
                            <div className="uk-inline">
                                <img src={cyrus} alt="" />
                            </div>
</a>

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

export default Work;
