import React, { Component } from 'react';
import logoWhite from './img/youngwhite.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="uk-section uk-section-secondary uk-light black-txt">
                <div className="uk-flex uk-flex-center uk-visible@m">
                    <div className='uk-padding-small'><a href=''>YOUTUBE</a></div>
                    <div className='uk-padding-small'><a href=''>INSTAGRAM</a></div>
                    <div className='uk-padding-small'><a href=''>TWITTER</a></div>
                    <div className='uk-padding-small'><a href=''>FACEBOOK</a></div>
                </div>
                <div className='uk-hidden@m'>
                    <div className="uk-text-center uk-padding-large" data-uk-grid>
                        <div className="uk-width-1-4 uk-light">
                            <span uk-icon="icon: youtube; ratio: 1.5"></span>
                        </div>
                        <div className="uk-width-1-4 uk-light">
                            <span uk-icon="icon: instagram; ratio: 1.5"></span>
                        </div>
                        <div className="uk-width-1-4 uk-light">
                            <span uk-icon="icon: twitter; ratio: 1.5"></span>
                        </div>
                        <div className="uk-width-1-4 uk-light">
                            <span uk-icon="icon: facebook; ratio: 1.5"></span>
                        </div>


                    </div>

                </div>
                <div className="uk-flex uk-flex-center">
                    <div className='uk-padding-small uk-text-center'>
                        <h1>Subscribe</h1>
                        <p className='uk-light'>Sign up to recieve news and updates!</p>
                    </div>
                </div>
                <div className="uk-flex uk-flex-center uk-padding">
                    <form className="uk-grid-small uk-width-1-3@m" data-uk-grid>
                        <div className="uk-width-2-3@s">
                            <input className="uk-input footer-input" type="text" placeholder="Email Address" />
                        </div>
                        <div className="uk-width-1-3@s">
                            <button className=" footer-btn uk-button uk-button-primary">GO</button>
                        </div>
                    </form>
                </div>
                <div className="uk-flex uk-flex-center uk-margin-large-top">
                    <p className='uk-margin-right uk-text-meta uk-light'>© 2019</p>
                    <img className='footer-logo' src={logoWhite} />
                </div>

            </div>

        )
    }
}