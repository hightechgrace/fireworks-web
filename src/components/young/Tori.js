import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import toriLogo from './img/logo/tori.png'

export default class Tori extends Component {
    render() {
        return (
            <div>
                <section className="uk-cover-container uk-height-medium" data-uk-height-viewport >
                    <div className="uk-position-relative" data-uk-height-viewport>
                        <iframe src="https://www.youtube-nocookie.com/embed/YE7VzlLtp-4?autoplay=1&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;loop=1&amp;modestbranding=1&amp;wmode=transparent" width="560" height="315" frameborder="0" allowFullScreen data-uk-cover></iframe>
                        <Header />
                        <div className="uk-overlay uk-light uk-position-center">
                            <img src={toriLogo} width='600'/>
                        </div>
                    </div>
                </section>
                <section className='uk-section uk-section-large'>
                    <div className='uk-container uk-container-xlarge '>
                        <h1> Stories of love from inter-tribal and interracial couples in Africa.<br />
                            There is an issue of tribalism, especially when it comes to marriages, that hinders the progress and development of Africa.<br /><br />
                            The show aims to guide intending couples through other people’s love stories and touch the hearts of the viewers. </h1>
                        <a href=''>View More</a>
                    </div>
                </section>
                <Footer />
            </div>

        )
    }
}