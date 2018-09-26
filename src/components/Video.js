import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import fs from '../img/fs.svg'
import studio from '../img/studio.svg'
import bar from '../img/bar.svg'
import tartan from '../img/tartan.jpg'
import doelle from '../img/doelle.jpg'
import sub from '../img/subs.png';

var content = (window.location.href).split('/').pop();

class Vids extends React.Component {
    render() {
        if (content == 'chude-jideonwo') {
            return (
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h1>The Story of Success</h1>
                        <h4><span><img src={bar} alt='' width='80' /></span> Chude Jideonwo</h4>
                        <br />
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/_vsyhnvDeyU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            )
        }
        else if (content == 'ferdy-adimefe') {
            return (
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h1>The Story of Success</h1>
                        <h4><span><img src={bar} alt='' width='80' /></span> Ferdy Adimefe</h4>
                        <br />
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/dxWy4RvVqns" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            )
        }

        else if (content == 'bonfire') {
            return (
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h1>The Story of Success</h1>
                        <h4><span><img src={bar} alt='' width='80' /></span> Natachi Peace, Adewale Aladejana & Michael Njoku</h4>
                        <br />
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/Tgd0YGEyX4k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            )
        }
        else if (content == 'akinlabi-akinbulumo') {
            return (
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h1>The Story of Success</h1>
                        <h4><span><img src={bar} alt='' width='80' /></span> Akinlabi Akinbulumo</h4>
                        <br />
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/AwsV3gX1SrM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            )
        }

        else if (content == 'cyrus-agbo') {
            return (
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h1>The Story of Success</h1>
                        <h4><span><img src={bar} alt='' width='80' /></span> Cyrus Agbo</h4>
                        <br />
                        <iframe width="100%" height="500" src="https://www.youtube.com/embed/5WKe7YF3mws" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <h1>Video Not Found</h1>
                        <h4><span><img src={bar} alt='' width='80' /></span> error</h4>
                                    </div>
                </div>
            )
        }



    }
}



class Tech extends Component {
    render() {
        return (
            <div className='uk-animation-fade'>
                <Nav />
                <Vids />
                <img className='floating uk-align-left uk-overlay' src={sub} width='550px' style={{ marginTop: '0px', marginLeft: '-70px' }} />
                <div className="uk-section uk-section-large ">
                    <div className="uk-container uk-text-center">
                        <h1 className='uk-heading-primary'> Starting a new project?</h1>
                        <p>we would love to help you </p>
                        <a href='/contact' data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:200" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Lets Talk</span>  </a>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Tech;
