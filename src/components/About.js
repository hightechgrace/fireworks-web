import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'

class About extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="uk-section uk-section-large" data-uk-height-viewport>
                    <div className="uk-container uk-container-large uk-margin-left uk-margin-right">
                        <div className="uk-dark uk-position-center-left uk-margin-large-left">
                            <h3>ABOUT US </h3>

                            <h1 className='uk-text-left uk-heading-primary'>A Digital Agency that combines Storytelling
                            & Technology To Give Meaningful Experiences </h1>
                        </div>
                    </div>
                </div>
                <div className="uk-section ">
                    <div className="uk-container">
                        <h3>WHAT WE DO</h3>
                        <h3>Fireworks is a creative digital media agency in Abuja that combines storytelling and technology to give
                        meaningful experiences.

                        We blend creativity,strategy and technology to make brands stand out and get the attention they deserve.
                        We are a team of storytellers and technologists creating new ways to connect brands and their audiences.</h3>
                    </div>
                </div>
                <div className="uk-section ">
                    <div className="uk-container">
                        <h3>WHAT WE DO</h3>
                        <h2>Values</h2>
                        <h3>Our values are Truth, Creativity, Passion and Excellence.</h3>
                        <br/>

                        <h2>Strategy</h2>
                        <h3>To connect the world by telling stories that engage and provide meaningful experiences.</h3>

                         <h2>Mission</h2>
                        <h3>To creatively inspire, inform and entertain the world one story at a time.</h3>
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
        )
    }
}
export default About;
