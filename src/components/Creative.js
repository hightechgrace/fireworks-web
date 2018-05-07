import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import creative_bg from '../img/creative_bg.png'
import coachela from '../img/story/coachella.png'
import ymca from '../img/story/ymca.png'


class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <div className="uk-text-center" data-uk-grid>
                            <div className="uk-width-1-4@m">
                                <h4>Creative</h4>

                                <div className="uk-card uk-light uk-card-default uk-card-body uk-margin-large-top uk-text-left" style={{ backgroundColor: '#000' }}>
                                    <h3>Creative <br />
                                        Contents that work</h3>
                                </div>
                            </div>
                            <div className="uk-width-3-4@m">
                                <div className="uk-card">
                                    <div className="uk-card-media-top">
                                        <img src={creative_bg} alt="" />
                                    </div></div>
                            </div>
                        </div>
                        <h3> Quality Contents that Engages</h3>

                        <h3>
                            Our goal is to create content that works. Our team of creatives (writers, designers, art directors, editors, animators, directors and producers) all work together to produce quality content for every digital platform.</h3>
                        <div className='uk-margins' style={{ width: '10%', borderBottom: '3px solid #FF3860' }}></div>
                        <button className="uk-margin-top uk-button uk-button-large uk-text-capitalize uk-light" style={{ backgroundColor: '#000' }}>Explore</button>

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
                <div className="uk-section uk-section-large ">
                    <div className="uk-container uk-text-center">
                        <h1 className='uk-heading-primary'> Starting a new project?</h1>
                        <p>we would love to help you </p>
                        <button className="uk-margin-top uk-button uk-button-default uk-text-capitalize uk-light" style={{ backgroundColor: '#000' }}>Lets Talk</button>

                    </div>
                </div>


                <Footer />
            </div>
        );
    }
}

export default Home;
