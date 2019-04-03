import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import popLogo from './img/logo/pop.png'
import Slide1 from './img/slide-1.jpg'
import Slide2 from './img/slide-2.jpg'
import Slide3 from './img/slide-3.jpg'

export default class Pop extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slideshow="autoplay: true;autoplay-interval: 5000">
                        <ul className="uk-slideshow-items">
                            <li>
                                <img src={Slide1} alt="" data-uk-cover />
                                <div className="uk-position-center uk-position-small uk-text-center">
                                    <img src={popLogo} width='300' />
                                    <h1 data-uk-slideshow-parallax="x: 100,-100">Heading</h1>
                                    <p data-uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </li>
                            <li>
                                <img src={Slide2} alt="" data-uk-cover />
                                <div className="uk-position-center uk-position-small uk-text-center">
                                    <img src={popLogo} width='300' />
                                    <h1 data-uk-slideshow-parallax="x: 100,-100">Heading</h1>
                                    <p data-uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </li>
                            <li>
                                <img src={Slide3} alt="" data-uk-cover />
                                <div className="uk-position-center uk-position-small uk-text-center">
                                    <img src={popLogo} width='300' />
                                    <h1 data-uk-slideshow-parallax="x: 100,-100">Heading</h1>
                                    <p data-uk-slideshow-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Header />
                </div>
                <section>
                    <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
                        <div className="success-text-2 uk-padding uk-padding-remove-left uk-padding-remove-right">
                            <h2>TOP TRENDING</h2>
                            <div className="uk-text-center uk-padding-large" data-uk-grid>
                                <div className="uk-width-1-2@m">
                                    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                                        <h3 className="uk-card-title">Default</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="uk-width-1-2@m">
                                    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                                        <h3 className="uk-card-title">Default</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="uk-width-1-2@m">
                                    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                                        <h3 className="uk-card-title">Default</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="uk-width-1-2@m">
                                    <div className="uk-card uk-card-default uk-card-hover uk-card-body">
                                        <h3 className="uk-card-title">Default</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />

            </div >

        )
    }
}