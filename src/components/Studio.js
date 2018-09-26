import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import fs from '../img/fs.svg'
import studio from '../img/studio.svg'
import bar from '../img/bar.svg'
import sub from '../img/subs.png';
import ferdy from '../img/ferdy.jpg';
import cyrus from '../img/cyrus.jpg';
import akin from '../img/akin.jpg';
import chude from '../img/chude.jpg';
import bonfire from '../img/Bonfire.jpg';


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
                                        <img src={studio} alt="" />
                                    </div></div>
                            </div>
                            <div className="uk-width-1-2@m uk-margin-xlarge-top">
                                <img className='uk-visible@m' src={fs} alt="" width='400' />
                                <img className='uk-hidden@m' src={fs} alt="" width='300' />
                                <p className='black'>Blending creativity, insight and humanity we create <br/>
high impact storytelling content that works</p>
                            </div>
                            <div className="uk-width-1-2@m uk-visible@m">
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        <img src={studio} alt="" />
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-default">
                    <div className="uk-container">
                        {/* <h3>Featured Case Studies</h3> */}
                        <h4><span><img src={bar} alt='' width='80' /></span> SELECTED PROJECTS</h4>
                        <div className=" uk-child-width-1-2@m" data-uk-grid>
                        
                            <a href='/video/chude-jideonwo'>
                            <div className="uk-inline">
                                <img src={chude} alt="" />
                                {/* <div className="uk-overlay uk-light uk-position-top">
                                    <h3>The Story of Success</h3>
                                    <p className='white'>Chude Jideonwo</p>
                                </div> */}
                            </div>
                            </a>
                            <a href='/video/ferdy-adimefe'>
                            <div className="uk-inline">
                                <img src={ferdy} alt="" />
                                {/* <div className="uk-overlay uk-light uk-position-top">
                                    <h2>The Story of Success</h2>
                                    <p className='white'>Ferdy Adimefe</p>
                                </div> */}
                            </div>
                            </a>
                            <a href='/video/bonfire'>
                            <div className="uk-inline">
                                <img src={bonfire} alt="" />
                                {/* <div className="uk-overlay uk-light uk-position-top">
                                    <h2>The Story of Success</h2>
                                    <p className='white'>Akinlabi Akinbulumo</p>
                                </div> */}
                            </div>
                           </a>

                            
                            <a href='/video/akinlabi-akinbulumo'>
                            <div className="uk-inline">
                                <img src={akin} alt="" />
                                {/* <div className="uk-overlay uk-light uk-position-top">
                                    <h2>The Story of Success</h2>
                                    <p className='white'>Akinlabi Akinbulumo</p>
                                </div> */}
                            </div>
</a>

                            <a href='/video/cyrus-agbo'>
                            <div className="uk-inline">
                                <img src={cyrus} alt="" />
                                {/* <div className="uk-overlay uk-light uk-position-top">
                                    <h2>The Story of Success</h2>
                                    <p className='white'>Cyrus Agbo</p>
                                </div> */}
                            </div>
</a>

                        </div>
                    </div>
                </div>

                <img  className='floating uk-align-left uk-overlay' src={sub} width='550px' style={{ marginTop: '0px', marginLeft:'-70px' }} />

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
