import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import bar from '../img/bar.svg'
import astro from '../img/astro.png'
import sub from '../img/subs.png'
import creative from '../img/creative.svg'
import strategy from '../img/strategy.svg'
import brand from '../img/brand.svg'
import digital from '../img/digital.svg'


class About extends Component {
    render() {
        return (
            <div className='uk-animation-fade'>
                <Nav />
                <div className="uk-section uk-section-large" data-uk-height-viewport>
                    <div className="uk-container uk-container-large uk-margin-left uk-margin-right">
                        <div className="uk-dark uk-position-center-left uk-margin-large-left">
                        <h4><span><img src={bar} alt='' width='80' /></span> ABOUT US</h4>
                            <h1 className=' uk-visible@m uk-text-left uk-heading-primary'>We are creative digital agency<br/> that combines <span className='underline red'>storytelling</span> and<br/> <span className='underline red'>technology</span> to give meaningful <br/>experiences </h1>
                            <h2 className=' uk-hidden@m uk-text-left '>We are creative digital agency that combines <span className='underline red'>storytelling</span> and <span className='underline red'><br/>technology</span> to give meaningful experiences </h2>
                        </div>
                    </div>
                </div>
                <img className='uk-visible@m floating uk-align-right' src={astro} width='450px' style={{ marginTop: '-500px' }} />
                        <img className='uk-hidden@m floating uk-align-right' src={astro} width='350px' style={{ marginTop: '-250px' }} />
                       
                <div className="uk-section ">
                    <div className="uk-container">
                        <h4><span><img src={bar} alt='' width='80' /></span> WHAT WE DO</h4>

                        <p className='black'>Fireworks is a creative digital media agency in Abuja that combines storytelling and technology to give
                        meaningful experiences.
                        <br/>
                        <br/>

                        We blend creativity,strategy and technology to make brands stand out and get the attention they deserve.
                        We are a team of storytellers and technologists creating new ways to connect brands and their audiences.</p>
                        <div className="uk-margin-xlarge-top uk-child-width-1-4@m  uk-text-center" data-uk-grid>
                            <div>
                                <div className="uk-card uk-text-left">
                                    <img src={creative} alt='' width='80' />
                                    <h3 className='uk-margin-remove-bottom uk-text-bold' style={{fontSize:'25px'}}>Creative</h3>
                                    <div className='red-small-bar uk-margin-small'></div>
                                    <ul className="uk-list uk-margin-medium-top small_txt">
                                        <li className='black'>Branding & Positioning</li>
                                        <li className='black'>UX</li>
                                        <li className='black'>Visual Design</li>
                                        <li className='black'>Product Design</li>
                                        <li className='black'>Copywriting & Scripting</li>
                                        <li className='black'>Campaign Creative</li>
                                    </ul>


                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-text-left">
                                    <img src={strategy} alt='' width='80' />
                                    <h3 className='uk-margin-remove-bottom uk-text-bold' style={{fontSize:'25px'}}>Strategy</h3>
                                    <div className='red-small-bar uk-margin-small'></div>
                                    <ul className="uk-list uk-margin-medium-top small_txt">
                                        <li className='black'>Research/Data Science</li>
                                        <li className='black'>Persona Development</li>
                                        <li className='black'>Ecosystem Planning</li>
                                        <li className='black'>Social Strategy</li>
                                        <li className='black'>Brand Strategy</li>
                                        <li className='black'>Content Strategy</li>
                                    </ul>


                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-text-left">
                                    <img src={brand} alt='' width='80' />
                                    <h3 className='uk-margin-remove-bottom uk-text-bold' style={{fontSize:'25px'}}>Brand Storytelling</h3>
                                    <div className='red-small-bar uk-margin-small'></div>
                                    <ul className="uk-list uk-margin-medium-top small_txt">
                                        <li className='black'>Film/Content Creation</li>
                                        <li className='black'>Photography</li>
                                        <li className='black'>Animation/Motion Graphics</li>
                                        <li className='black'>3D/VFX/Post</li>
                                        <li className='black'>Digital Outdoor</li>
                                        <li className='black'>Sound Design/Music</li>
                                    </ul>


                                </div>
                            </div>
                            <div>
                                <div className="uk-card uk-text-left">
                                    <img src={digital} alt='' width='65' />
                                    <h3 className='uk-margin-remove-bottom uk-text-bold' style={{fontSize:'25px'}}>Digital</h3>
                                    <div className='red-small-bar uk-margin-small'></div>
                                    <ul className="uk-list uk-margin-medium-top small_txt">
                                        <li className='black'>HTML/JS/CSS</li>
                                        <li className='black'>Web Apps</li>
                                        <li className='black'>Native Applications</li>
                                        <li className='black'>CMS & Platform Builds</li>
                                    </ul>


                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="uk-section uk-section-large uk-margin-large-bottom">
                    <div className="uk-container">
                    <h4><span><img src={bar} alt='' width='80' /></span> VALUES</h4>
                        <p className='black'>Our values are Truth, Creativity, Passion and Excellence.</p>
                        <br/>
                        <h4><span><img src={bar} alt='' width='80' /></span> STRATEGY</h4>

                        <p className='black'>To connect the world by telling stories that engage and provide meaningful experiences.</p>
                        <br/>
                        <h4><span><img src={bar} alt='' width='80' /></span> MISSION</h4>
                        <p className='black'>To creatively inspire, inform and entertain the world one story at a time.</p>
                        </div>
                </div>
                <img  className='floating uk-align-left uk-overlay' src={sub} width='550px' style={{ marginTop: '-120px', marginLeft:'-70px' }} />
                <div className="uk-section uk-section-large ">
                    <div className="uk-container uk-text-center">
                        <h1 class='uk-heading-primary'> Starting a new project?</h1>
                        <p>we would love to help you </p>
                        <a href='/contact' data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:200" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Lets Talk</span>  </a>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default About;
