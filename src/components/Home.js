import React, { Component } from 'react';
import Nav from './common/Nav'
import Footer from './common/Footer'
import young from '../img/young.png'
import tori from '../img/tori.png'
import young_logo from '../img/young.svg'
import tori_logo from '../img/tori.svg'
import yanga_logo from '../img/yanga.svg'
import yanga from '../img/yanga.png'
import fu from '../img/fu.svg'
import fs from '../img/fs.svg'
import fd from '../img/fd.svg'
import bar from '../img/bar.svg'
import Typing from 'react-typing-animation';
import astro from '../img/astro.png';
import sub from '../img/subs.png';
import studio_icon from '../img/studio-icon.svg'
import tech_icon from '../img/tech-icon.svg'
import uni_icon from '../img/uni-icon.svg'
import creative from '../img/creative.svg'
import strategy from '../img/strategy.svg'
import brand from '../img/brand.svg'
import digital from '../img/digital.svg'

import Instafeed from 'react-instafeed'


class Home extends Component {
    render() {
        const instafeedTarget = 'instafeed'
        return (
            <div className='uk-animation-fade'>
                <Nav />
                <div className="uk-visible@m uk-section uk-section-large home-bg" data-uk-height-viewport>
                    <div className="uk-container uk-container-large uk-margin-left uk-margin-right">
                        <div className="uk-dark uk-position-center-left uk-margin-large-left">
                            <Typing speed={50}>
                            <h1 className='uk-text-left uk-heading-primary' style={{ fontSize: '70px' }}>We are creative digital agency<br/> that combines <span className='underline red'>storytelling</span> and <br/> <span className='underline red'>technology</span> to give meaningful<br/> experiences </h1>
                                
                                <h3 className='red'>we are a digital media company</h3>
                            </Typing>
                        </div>
                    </div>
                </div>
                <div className="uk-hidden@m uk-section uk-section-large home-bg" data-uk-height-viewport>
                    <div className="uk-container uk-container-large uk-margin-left uk-margin-right">
                        <div className="uk-dark uk-position-center-left uk-margin-large-left">
                            <Typing speed={50}>
                                <h1 className='uk-text-left uk-heading-primary' style={{ fontSize: '30px' }}>We are creative digital agency that combines <span className='underline red'>storytelling</span> and <br/> <span className='underline red'>technology</span> to give meaningful<br/> experiences </h1>
                                <h6 className='red'>we are a digital media company</h6>
                            </Typing>
                        </div>
                    </div>
                </div>

                <div className="uk-section uk-section-secondary uk-light home-view brand-bg ">
                    <div className="uk-container uk-margin-large-top uk-margin-large-bottom" style={{ paddingTop: '20px', paddingBottom: '150px' }}>
                        <img className='uk-visible@m floating uk-align-right' src={astro} width='550px' style={{ marginTop: '-600px' }} />
                        <img className='uk-hidden@m floating uk-align-right' src={astro} width='350px' style={{ marginTop: '-350px' }} />
                        <h4><span><img src={bar} alt='' width='80' /></span> OUR BRANDS</h4>
                        <div className="uk-visible@m uk-child-width-1-3@m uk-text-center uk-grid-match" data-uk-grid>
                            <div className=''>
                                <div className="uk-inline">
                                    <img data-uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true" src={young} alt="" />
                                    <div className=''>
                                        <div className=" uk-width-3-5 uk-card uk-card-default uk-padding-small  uk-position-center-left uk-text-left brand-card" data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                                            <div className='uk-padding-small'>
                                                <img data-uk-scrollspy="cls: uk-animation-scale-up; repeat: true; delay:200" src={young_logo} width='120' alt='' />
                                                <p className='black small_txt'>news, pop culture and lifestyle magazine. the voice of a movement, expressing the passions and narrative of a generation that refuses to be left behind</p>
                                                <div className='uk-margins red-card-bar'></div>
                                                <a href='http://www.younghq.co/' target='blank_' data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:500" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Explore</span>  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className=''>
                                    <div className="uk-inline" >
                                        <img data-uk-scrollspy="cls: uk-animation-slide-top; repeat: true; delay:400" src={yanga} alt="" />
                                        <div>
                                            <div className=" uk-width-3-5 uk-card uk-card-default uk-padding-small uk-position-center-left uk-text-left brand-card" data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:400">
                                                <div className='uk-padding-small'>
                                                    <img data-uk-scrollspy="cls: uk-animation-scale-up; repeat: true; delay:500" src={yanga_logo} width='120' alt='' />
                                                    <p className='black small_txt'>Yanga Creates and curates stories on beauty, fashion, entertainment and lifestyle.<br /><br /><br /><br /></p>
                                                    <div className='uk-margins red-card-bar'></div>
                                                    <a href='http://yanga.co/' target='blank_' data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:800" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Explore</span>  </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className=''>
                                    <div className="uk-inline" >
                                        <img data-uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true; delay:600" src={tori} alt="" />
                                        <div>
                                            <div className=" uk-width-3-5 uk-card uk-card-default uk-padding-small uk-position-center-left uk-text-left brand-card" data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:400">
                                                <div className='uk-padding-small'>
                                                    <img data-uk-scrollspy="cls: uk-animation-scale-up; repeat: true; delay:1000" src={tori_logo} width='120' alt='' />
                                                    <p className='black small_txt'>Toritori tells Nigeria’s story by telling Nigerians’ stories through documentary, articles, videography and photography.<br /><br /></p>
                                                    <div className='uk-margins red-card-bar'></div>
                                                    <a href='http://toritori.ng/' target='blank_' data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:1100" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Explore</span>  </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="uk-hidden@m uk-child-width-1-3@l uk-text-center uk-grid-match" data-uk-grid>
                            <div className='uk-margin-xlarge-bottom'>
                                <div className="uk-inline">
                                    <img data-uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true" src={young} alt="" />
                                    <div className=''>
                                        <div className=" uk-width-4-5 uk-card uk-card-default uk-padding-small uk-position-center-left uk-text-left brand-card " data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                                            <div className='uk-padding-small'>
                                                <img data-uk-scrollspy="cls: uk-animation-scale-up; repeat: true; delay:300" src={young_logo} width='150' alt='' />
                                                <p className='black small_txt '>news, pop culture and lifestyle magazine. the voice of a movement, expressing the passions and narrative of a generation that refuses to be left behind</p>
                                                <div className='uk-margin red-card-bar'></div>
                                                <a href='http://www.younghq.co/' target='blank_' data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:500" className="uk-text-left uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Explore</span>  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='uk-margin-xlarge-top uk-margin-xlarge-bottom'>
                                    <div className="uk-inline uk-margin-xlarge-top" >
                                        <img data-uk-scrollspy="cls: uk-animation-slide-top; repeat: true; delay:500" src={yanga} alt="" />
                                        <div>
                                            <div className=" uk-width-4-5 uk-card uk-card-default uk-padding-small uk-position-center-left uk-text-left brand-card" data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:400">
                                                <div className='uk-padding-small'>
                                                    <img data-uk-scrollspy="cls: uk-animation-scale-up; repeat: true; delay:700" src={yanga_logo} width='120' alt='' />
                                                    <p className='black small_txt'>Yanga Creates and curates stories on beauty, fashion, entertainment and lifestyle.</p>
                                                    <div className='uk-margin red-card-bar'></div>
                                                    <a href='http://yanga.co/' target='blank_' data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:900" className="uk-text-left uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Explore</span>  </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='uk-margin-xlarge-top uk-margin-xlarge-bottom'>
                                    <div className="uk-inline" >
                                        <img data-uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true; delay:500" src={tori} alt="" />
                                        <div>
                                            <div className=" uk-width-4-5 uk-card uk-card-default uk-padding-small uk-position-center-left uk-text-left brand-card" data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:400">
                                                <div className='uk-padding-small'>
                                                    <img data-uk-scrollspy="cls: uk-animation-scale-up; repeat: true; delay:900" src={tori_logo} width='150' alt='' />
                                                    <p className='black small_txt'>toritori tells Nigeria’s story by telling Nigerians’ stories through documentary, articles, videography and photography.<br /><br /></p>
                                                    <div className='uk-margins red-card-bar'></div>
                                                    <a href='http://toritori.ng/' target='blank_' data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true; delay:1100" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Explore</span>  </a>

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
                        <div className='uk-hidden@m uk-margin-xlarge-top'></div>

                        <div className="line"></div>
                        <h4 className='heading'> OUR ARMS</h4>
                        <div className="uk-child-width-1-3@s uk-text-left uk-margin-xlarge-top uk-grid-xlarge" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">

                            <div>
                                <a style={{textDecoration:'none'}} href = '/studio'>
                                <div className="uk-card ">
                                    <img className='' src={studio_icon} alt='' width='60' />
                                    <br />
                                    <img className='uk-margin-top uk-margin-bottom' src={fs} alt='' width='230' />
                                    <p className='uk-margin-small-top small_txt black'>Blending creativity & insight to create high impact<br /> storytelling content that works.</p>
                                    <a className="uk-text-left  uk-button uk-button-small uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.2"><span className='white small_txt'>Explore</span>  </a>                                                                    
                                
                                </div>
                                </a>
                            </div>

                            <div>
                                <a style={{textDecoration:'none'}} href = '/tech'>
                                <div className="uk-card ">
                                    <img className='' src={tech_icon} alt='' width='60' />
                                    <br />
                                    <img className='uk-margin-top uk-margin-bottom' src={fd} alt='' width='230' />
                                    <p className='uk-margin-small-top small_txt black'>Building solutions from Front-end Development, <br />Web Apps, Mobile Apps etc.</p>
                                    <a className="uk-text-left  uk-button uk-button-small uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.2"><span className='white small_txt'>Explore</span>  </a>                                
                                </div>
                                </a>
                            </div>

                            <div>
                                <a style={{textDecoration:'none'}} href = '/home'>
                                <div className="uk-card ">
                                    <img className='' src={uni_icon} alt='' width='60' />
                                    <br />
                                    <img className='uk-margin-top uk-margin-small-bottom' src={fu} alt='' width='120' />
                                    <p className='uk-margin-small-top small_txt black'>The digital ivory tower for mordern <br />learning the skills</p>
                                    <a className="uk-text-left  uk-button uk-button-small uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.2"><span className='white small_txt'>Explore</span>  </a>                                                                    
                                </div>
                                </a>
                            </div>


                        </div>

                    </div>
                </div>
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <div className="line"></div>
                        <h4 className='heading'>SERVICES </h4>


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
                <div className="uk-section uk-section-large">
                    <div className="uk-container">
                        <div className="line"></div>
                        <h4 className='heading'>SEE WHAT WE'RE UP TO </h4>

                        <h3>
                            Wanna get the inside scoop? <br /> <br />
                            Follow us on <a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='red underline'>Facebook</a>, <a href='https://twitter.com/FireworksHQ' target='blank_' className='red underline'>Twitter</a> and <a href='https://www.instagram.com/fireworkshq/' target='blank_' className='red underline'>Instagram</a> to get <br />
                            more information and inside details from us
                        </h3>
                         </div>
                         <div id={instafeedTarget} className='uk-visible@m uk-flex uk-flex-center uk-margin-xlarge-top uk-animation-fade'>
                                <Instafeed
                                    limit='5'
                                    ref='instafeed'
                                    resolution='standard_resolution'
                                    sortBy='most-recent'
                                    target={instafeedTarget}
                                    template='
                                        <div className=""><a  target="blank_" href="{{link}}" ><img src="{{image}}" width="232" style="border: 1px solid #000; margin: 5px; padding: 5px;"/></a></div>
                                    '
                                    userId='4355037176'
                                    clientId='0b2ff76bdf074962ae9d903b72ed1707'
                                    accessToken='4355037176.0b2ff76.c7fd9a9349fa4c71a56541ff1032405c'
                                />
                        </div>
                        
                </div>

                <img  className='floating uk-align-left uk-overlay' src={sub} width='550px' style={{ marginTop: '-120px', marginLeft:'-70px' }} />
  
                <div className="uk-section uk-section-large ">
                    <div className="uk-container uk-text-center">
                        <h1 className='uk-heading-primary'> Starting a new project?</h1>
                        <p>we would love to help you </p>
                        <a href='/contact' data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true; delay:200" className="uk-text-left uk-margin-top uk-button  uk-text-capitalize black-btn red" data-uk-icon="icon: arrow-right; ratio: 1.6"><span className='white'>Lets Talk</span>  </a>
                        
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

export default Home;
