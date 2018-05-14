import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import creative_bg from '../img/strategy_bg.png'
import mag from '../img/story/mag.png'
import ymca from '../img/story/ymca.png'


class Strategy extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <div className="uk-text-center" data-uk-grid>
                            <div className="uk-width-1-4@m">
                                <h4>Strategy</h4>

                                <div className="uk-card uk-light uk-card-default uk-card-body uk-margin-large-top uk-text-left red-bg">
                                    <h3>Strategy <br />
                                        Taking Advantage</h3>
                                </div>
                            </div>
                            <div className="uk-width-3-4@m">
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        <img src={creative_bg} alt="" />
                                    </div></div>
                            </div>
                        </div>
                        <h3>  Working Closely with Clients</h3>

                        <h3>
                            Our strategy team works closely with clients to understand their business _and marketing goals and develop solutions that deliver
    measurable business results.
    We go deep into research and analysis to get under the skin of your audience, changing existing behaviours and creating movements
within our community.</h3>
                        <div className='uk-margins red-bar'></div>
                        <button className="uk-margin-top uk-button uk-button-large uk-text-capitalize uk-light black-btn">Explore</button>

                    </div>
                </div>
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h3>Featured Case Studies</h3>

                        <div className="uk-child-width-1-2@m" data-uk-grid>

                            <div>
                                <div className="uk-card ">
                                    <div className="uk-margin-top">
                                        <h4>Using out Strategies we grew Young Magazine to </h4>
                                        <h1 className='uk-heading-primary red'>18,000,000</h1>
                                        <h4>Active readers monthly </h4>                                        
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        <img src={mag} alt="" width='400' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-section uk-section-muted">
                    <div className="uk-container">
                        <h3>Strategic Partnerships</h3>

                        <div className="uk-child-width-1-5@s uk-text-center" data-uk-grid>
                            <div>
                                <div className="no-shadow uk-card uk-card-default uk-card-body">
                                    <h5><span data-uk-icon="icon: bolt; ratio: 2"></span></h5>
                                    <p className='uk-text-small'>We worked with xxx to build an immersive creative experience for the xxx initiative</p>
                                </div>
                            </div>
                            <div>
                                <div className="no-shadow uk-card uk-card-default uk-card-body">
                                    <h5><span data-uk-icon="icon: bolt; ratio: 2"></span></h5>
                                    <p className='uk-text-small'>We worked with xxx to build an immersive creative experience for the xxx initiative</p>
                                </div>
                            </div>
                            <div>
                                <div className="no-shadow uk-card uk-card-default uk-card-body">
                                    <h5><span data-uk-icon="icon: bolt; ratio: 2"></span></h5>
                                    <p className='uk-text-small'>We worked with xxx to build an immersive creative experience for the xxx initiative</p>
                                </div>
                            </div>
                            <div>
                                <div className="no-shadow uk-card uk-card-default uk-card-body">
                                    <h5><span data-uk-icon="icon: bolt; ratio: 2"></span></h5>
                                    <p className='uk-text-small'>We worked with xxx to build an immersive creative experience for the xxx initiative</p>
                                </div>
                            </div>
                            <div>
                                <div className="no-shadow uk-card uk-card-default uk-card-body">
                                    <h5><span data-uk-icon="icon: bolt; ratio: 2"></span></h5>
                                    <p className='uk-text-small'>We worked with xxx to build an immersive creative experience for the xxx initiative</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-large ">
                    <div className="uk-container uk-text-center">
                        <h3 className=''> Brand Storytelling</h3>
                        <button className="uk-margin-top uk-button uk-button-default uk-text-capitalize uk-light" style={{ backgroundColor: '#000' }}>Next</button>

                    </div>
                </div>


                <Footer />
            </div>
        );
    }
}

export default Strategy;
