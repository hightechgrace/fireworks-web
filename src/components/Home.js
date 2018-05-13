import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import young from '../img/young.png'
import tori from '../img/tori.png'
import young_logo from '../img/young.svg'
import tori_logo from '../img/tori.svg'
import creative from '../img/creative.png'
import digital from '../img/digital.png'
import story from '../img/story.png'
import strategy from '../img/strategy.png'

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="uk-section uk-section-large" data-uk-height-viewport>
                    <div className="uk-container uk-container-large uk-margin-left uk-margin-right">
                        <div className="uk-dark uk-position-center-left uk-margin-large-left">

                            <h1 className='uk-text-left uk-heading-primary'>We combine storytelling and <br />
                                technology to give meaningful <br />
                                experiences </h1>
                            <h3>we are a digital media company</h3>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-secondary uk-light">
                    <div className="uk-container home-view">
                        <h3>OUR BRANDS </h3>
                        <div className="uk-child-width-1-2@m uk-text-center uk-grid-match" data-uk-grid>
                            <div className=''>
                                <div className="uk-inline" >
                                    <img src={young} alt="" />
                                    <div className=''>
                                        <div className=" uk-width-medium uk-card uk-card-default uk-padding-small uk-position-center-left uk-text-left brand-card">
                                            <div className='uk-padding-small'>
                                                <img src={young_logo} width='100' alt=''/>
                                                <p>news, pop culture and lifestyle magazine. the voice of a movement, expressing the passions and narrative of a generation that refuses to be left behind</p>

                                                <div className='uk-margins red-card-bar'></div>
                                                <button className="uk-margin-top uk-button uk-button-default uk-text-capitalize black-btn">Explore</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className=''>
                                    <div className="uk-inline" >
                                        <img src={tori} alt="" />
                                        <div>
                                            <div className=" uk-width-medium uk-card uk-card-default uk-padding-small uk-position-center-left uk-text-left brand-card">
                                                <div className='uk-padding-small'>
                                                    <img src={tori_logo} width='130' alt=''/>
                                                    <p>toritori tells Nigeria’s story by telling Nigerians’ stories through documentary, articles, videography and photography.<br /><br /><br /><br /></p>
                                                    <div className='uk-margins red-card-bar'></div>
                                                    <button className="uk-margin-top uk-button uk-button-default uk-text-capitalize black-btn">Explore</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h3>SERVICES </h3>
                        <h3>
                            Our goal is to create content that works. <br />
                            <br />

                            Our team of creatives (writers, designers, art directors, editors, <br />
                            animators, directors and producers) all work together to produce <br />
                            quality content for every digital platform.
                    </h3>
                        <div className="uk-margin-xlarge-top uk-child-width-1-4@m  uk-text-center" data-uk-grid>
                            <div>
                                <div className="uk-card ">
                                    <div className="uk-inline">
                                        <img src={creative} alt='' />
                                        <div className="uk-overlay uk-light uk-position-bottom-left">
                                            <h3>Creative </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="uk-card ">
                                    <div className="uk-inline">
                                        <img src={strategy} alt='' />
                                        <div className="uk-overlay uk-light uk-position-bottom-left">
                                            <h3>Strategy </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="uk-card ">
                                    <div className="uk-inline">
                                        <img src={story} alt='' />
                                        <div className="uk-overlay uk-light uk-position-bottom-left">
                                            <h3>Brand Storytelling </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className="uk-card ">
                                    <div className="uk-inline">
                                        <img src={digital} alt='' />
                                        <div className="uk-overlay uk-light uk-position-bottom-left">
                                            <h3>Digital </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h3>SEE WHAT WE'RE UP TO </h3>
                        <h3>
                            Wanna get the inside scoop? <br /> <br />
                            Follow us on Facebook, Twitter and Instagram to get <br />
                            more information and inside details from us
                        </h3>
                        <div className="uk-margin-xlarge-top uk-grid-match uk-child-width-expand@s uk-text-center" data-uk-grid>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">Instagram <br />feed loading...</div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">Instagram <br />feed loading...</div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">Instagram <br />feed loading...</div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">Instagram <br />feed loading...</div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">Instagram <br />feed loading...</div>
                            </div>
                            <div>
                                <div className="uk-card uk-card-default uk-card-body">Instagram <br />feed loading...</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-large ">
                    <div className="uk-container uk-text-center">
                        <h1 class='uk-heading-primary'> Starting a new project?</h1>
                        <p>we would love to help you </p>
                        <button className="uk-margin-top uk-button uk-button-default uk-text-capitalize uk-light black-btn">Lets Talk</button>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
