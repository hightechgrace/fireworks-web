import React, { Component } from 'react';
import Footer from './Footer';
import youngLogoWhite from './img/youngwhite.png'
import youngBG from './img/youngBG.jpg'
import tori from './img/shows/tori.jpg'
import pop from './img/shows/pop.jpg'
import cafe from './img/shows/cafe.jpg'
import react from './img/shows/react.jpg'
import waves from './img/shows/waves.jpg'
import toriLogo from './img/logo/tori.png'
import popLogo from './img/logo/pop.png'
import cafeLogo from './img/logo/cafe.png'
import reactLogo from './img/logo/react.png'
import wavesLogo from './img/logo/waves.png'
import hustle from './img/hustle.jpg'
import success from './img/success.jpg'


class Shows extends Component {
    render() {
        return (
            <div className="uk-width-1-5 uk-inline uk-inline-clip uk-transition-toggle">
                <img className="uk-transition-scale-up uk-position-cover" src={this.props.img} alt="" data-uk-cover />
                <div className="uk-overlay-primary uk-position-cover"></div>
                <div className="uk-overlay uk-position-bottom uk-padding">
                    <a href={this.props.link}>
                        <img src={this.props.logo} style={{ width: "160px" }} />
                    </a>
                </div>
            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="uk-cover-container" data-uk-height-viewport>
                        <img src={youngBG} alt="young logo" data-uk-cover />
                        <div className="uk-position-large uk-position-center uk-light">
                            <a href="/young"><img className='uk-text-center logo' src={youngLogoWhite} /></a>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="uk-padding uk-text-center">
                        <h1>OUR SHOWS</h1>
                        <hr className='header-hr' />
                    </div>
                    <div className="uk-grid-collapse uk-text-center black-txt uk-visible@m" data-uk-grid data-uk-height-viewport>
                        <Shows img={tori} logo={toriLogo} link={'/tori'} />
                        <Shows img={pop} logo={popLogo} link={'/pop'} />
                        <Shows img={cafe} logo={cafeLogo} link={'/cafe'} />
                        <Shows img={react} logo={reactLogo} link={'/react'} />
                        <Shows img={waves} logo={wavesLogo} link={'/waves'} />
                    </div>
                    <div className='uk-hidden@m black-txt'>
                        <div className="uk-text-center uk-padding" uk-grid>
                            <div className="uk-width-auto@m uk-padding">
                                <a href=''><img src={toriLogo} /></a>
                            </div>
                            <div className="uk-width-auto@m uk-padding">
                                <a href=''><img src={popLogo} /></a>
                            </div>
                            <div className="uk-width-auto@m uk-padding">
                                <a href=''><img src={cafeLogo} /></a>
                            </div>
                            <div className="uk-width-auto@m uk-padding">
                                <a href=''><img src={reactLogo} /></a>
                            </div>
                            <div className="uk-width-auto@m uk-padding">
                                <a href=''><img src={wavesLogo} /></a>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className='uk-section uk-section-muted'>
                    <div className='uk-container'>
                        <div className="uk-padding uk-text-center">
                            <h1>SUCCESS STORIES</h1>
                            <hr className='header-hr' />
                        </div>
                        <div className="uk-text-center uk-padding-large uk-grid-large" data-uk-grid>
                            <div className="uk-width-1-2@m">
                                <div className="uk-card uk-card-default">
                                    <img src={success} alt="" />
                                </div>
                            </div>
                            <div className="uk-width-1-2@m">
                                <div className="uk-card uk-card-default">
                                    <img src={hustle} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="uk-padding uk-text-center">
                    <h1>OUR STORIES</h1>
                    <hr className='header-hr' />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Contact;
