import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import cafeBG from './img/cafeBG.jpg'
import sidebar from './img/sidebar.jpg'
import cafeLogo from './img/logo/cafe.png'
import Slide1 from './img/slide-1.jpg'
import Slide2 from './img/slide-2.jpg'
import Slide3 from './img/slide-3.jpg'

export default class Cafe extends Component {
    render() {
        return (
            <div>
                <div className="uk-cover-container" data-uk-height-viewport>
                    <img src={cafeBG} alt="" data-uk-cover />
                    <div className="uk-overlay-primary uk-position-cover"></div>
                    <div className="uk-position-large uk-position-center uk-light">
                        <img src={cafeLogo} width='600' />
                    </div>
                    <Header />
                </div>
                <section>
                    <div className="uk-visible@s uk-container">
                        <div className="uk-grid-collapse uk-child-width-expand@s uk-text-left uk-text-middle" data-uk-grid>
                            <div className="uk-padding-large ">
                                <h2>The Cafe</h2>
                                <p>It is a refreshing and original take on panel style discussions.<br /> <br />
                                    Young people partake in roundtable conversations about topics<br />ranging from politics to relationships, society and what the impact is for this generation.</p>
                                <p>Unlike other modern day talk shows, this offers a diverse and <br />
                                    outspoken range of guests, who offer fresh points of view, passion and youthful energy that reflects the <br />
                                    viewers’ mindsets.<br />
                                </p>
                            </div>
                            <div className="uk-padding-large">
                                <a href=""><img src={sidebar} /></a>
                            </div>
                        </div>
                        <div className="uk-padding-large ">
                            <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
                                <div>
                                    <div className="uk-background-muted">
                                        <img src={Slide1} />
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-background-primary">
                                        <img src={Slide2} />
                                    </div>
                                </div>
                            </div>
                            <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
                                <div>
                                    <div className="uk-background-default uk-text-left">
                                        <img src={Slide3} />

                                        <h2 className="real">real people, real talk.</h2>
                                        <a href="#" className="new-link">View More</a>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-background-secondary uk-light">
                                    <img src={Slide1}/>
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