import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import wavesBG from './img/wavesBG.jpg'
import sidebar from './img/sidebar.jpg'
import wavesLogo from './img/logo/waves.png'
import ire from './img/artist/ire.jpg'
import tay from './img/artist/tay.jpg'
import jerry from './img/artist/jerry.jpg'

export default class Waves extends Component {
    render() {
        return (
            <div>
                <div className="uk-cover-container" data-uk-height-viewport>
                    <img src={wavesBG} alt="" data-uk-cover />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="uk-position-large uk-position-center uk-light">
                        <img src={wavesLogo} width='600' />
                        <h2 className='uk-text-center'>hear their stories, hear their songs</h2>
                    </div>
                    <Header />
                </div>
                <section>
                    <div className=" uk-container">
                        <div className="uk-padding-large uk-text-center">
                            <h2>Lorem ipsum dolor</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br />
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum<br />
                                dolore eu fugiat nulla pariatur. <br /><br />
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui<br />
                                officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="uk-child-width-1-3@m uk-padding-large" data-uk-grid>
                            <div>

                                <div class="uk-inline">
                                    <img src={tay} alt="" />
                                    <div class="uk-overlay uk-overlay-primary-foot uk-position-bottom uk-padding-small">
                                        <p>Tay Iwar</p>
                                    </div>
                                </div>

                            </div>
                            <div>

                                <div class="uk-inline">
                                    <img src={jerry} alt="" />
                                    <div class="uk-overlay uk-overlay-primary-foot uk-position-bottom uk-padding-small">
                                        <p>Jeremiah Gyang</p>
                                    </div>
                                </div>

                            </div>
                            <div>

                                <div class="uk-inline">
                                    <img src={ire} alt="" />
                                    <div class="uk-overlay uk-overlay-primary-foot uk-position-bottom uk-padding-small">
                                        <p>Ire Toluhi</p>
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