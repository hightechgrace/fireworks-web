import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
// import creative_bg from '../img/creative_bg.png'
import coachela from '../img/story/coachella.png'
import ymca from '../img/story/ymca.png'


class Creative extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <div className="uk-text-left" data-uk-grid>
                            <div className="uk-width-1-4@m">
                                <div className="line"></div>
                                <h4 className='heading'>Creative</h4>

                                <div className="uk-card uk-light uk-card-default uk-card-body uk-overlay uk-text-left black-bg">
                                    <h3><span className='red'>Creative</span> <br />
                                        Contents that work</h3>
                                </div>
                            </div>
                            <div className="uk-width-3-4@m">
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        {/* <img src={creative_bg} alt="" /> */}
                                    </div></div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <h3 className='heading'> Quality Contents that Engages</h3>

                        <h5 className='uk-margin-medium-top uk-bold'>
                            Our goal is to create content that works. Our team of creatives (writers, designers, art directors, editors, animators, directors and producers) all work together to produce quality content for every digital platform.</h5>
                        <div className='uk-margins red-bar'></div>
                        <button className="uk-margin-top uk-button uk-button-large uk-text-capitalize uk-light black-btn">Explore</button>

                    </div>
                </div>
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h3>Featured Case Studies</h3>
                        <div className="uk-child-width-1-2@m" data-uk-grid>
                            <div>
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        <img src={coachela} alt="" />
                                    </div>
                                    <div className="uk-margin-top">
                                        <h6 className="">FIRE FESTIVAL</h6>
                                        <h4>How we delivered Africa’s First Coachella and the amazing experience it turned out to be</h4>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="uk-card ">

                                    <div className="uk-card-media-top">
                                        <img src={ymca} alt="" />
                                    </div>
                                    <div className="uk-margin-top">
                                        <h6 className="">YMCA</h6>
                                        <h4>How we delivered Africa’s First Coachella and the amazing experience it turned out to be</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-section uk-section-muted">
                    <div className="uk-container">
                        <h3>Creative Partnerships</h3>

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
                        <h3 className=''> Strategy</h3>
                        <button className="uk-margin-top uk-button uk-button-default uk-text-capitalize uk-light" style={{ backgroundColor: '#000' }}>Next</button>

                    </div>
                </div>


                <Footer />
            </div>
        );
    }
}

export default Creative;
