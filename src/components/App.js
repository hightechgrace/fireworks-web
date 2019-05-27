import React, { Component } from 'react';
import astro from '../img/astro_nu.jpg';
import Nav from '../components/common/NewNav'
import Zinox from '../img/zinox_product.png';
import Doelle from '../img/doelle_product.png';
import Agency from '../img/agency.png';
import Studio from '../img/studio.png';
import Brands from '../img/brands.png';
import Firex from '../img/firex.png';
import FireworksU from '../img/fireworksu.png';
import Tech from '../img/tech.png';
import Blog1 from '../img/blog1.png';
import Blog2 from '../img/blog2.png';
import Footer from './common/NewFooter'

class App extends Component {
  render() {
    return (
      <div>
        <section className="uk-position-relative uk-visible@m uk-section-secondary uk-section-large uk-remove-margin" data-uk-height-viewport style={{ backgroundColor: "#000" }}>
          <Nav/>
          <div className="uk-container uk-container-xlarge uk-margin-left uk-margin-right" >
            <div className='uk-position-bottom-center uk-width-4-5 uk-margin-large-top'>
              <div className="uk-flex-middle" data-uk-grid>
                <div className="uk-width-1-3@m uk-flex-first " style={{ position: 'relative' }}>
                  <div style={{ width: '750px' }}>
                    <p className='uk-margin-large-bottom ' style={{ marginLeft: '-50px' }}>WE ARE FIREWORKS</p>
                    <h1 className='header-txt'>
                      Shaping Africa’s Future <br /> Through Storytelling <br /> and Technology
                    </h1>
                    <p className='uk-margin-large-top'>We are a Creative Agency, A Production Studio and <br />
                      We build Authoritative and Influential Media Brands</p>
                    <a className='uk-margin-xlarge-top' href=''>Know Us</a>
                  </div>
                </div>
                <div className="uk-width-2-3@m ">
                  <img src={astro} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section-white uk-section-small fwk-home-section' >
          <div className="uk-container uk-container-xlarge" >
            <h2 className='uk-margin-large-top fwk-home-h2'>About Fireworks.</h2>
            <p className='uk-margin-medium-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        </section>
        {/* <section className='uk-section-white uk-section-small fwk-home-section' >
          <div className="uk-container uk-container-xlarge">
            <h2 className='uk-margin-large-top fwk-home-h2'>Our Work.</h2>
            <p className='uk-margin-medium-top uk-margin-large-bottom'>Explore some of our latest creative projects. </p>
            <div className="uk-grid-large uk-child-width-1-2@s uk-child-width-1-2@m uk-child-width-1-2@l uk-text-center" data-uk-grid-parallax uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-overlay; delay: 300; repeat: true">
              <div className="uk-inline">
                <img src={Zinox} />
                <div className="uk-overlay uk-dark uk-position-bottom-right uk-text-right" style={{ marginRight: '-60px' }}>
                  <h1 >Zinox</h1>
                  <p>Corporate Website</p>
                </div>
              </div>
              <div className="uk-inline">
                <img src={Doelle} />
                <div className="uk-overlay uk-dark uk-position-bottom-right uk-text-right" style={{ marginRight: '-60px' }} uk-scrollspy-className="uk-animation-slide-top">
                  <h1 >Doelle</h1>
                  <p>Corporate Website</p>
                </div>
              </div>
            </div>
            <div style={{ minHeight: '5px' }}></div>
            <div className='uk-margin-xlarge  uk-text-center'>
              <a href=''>View More</a>
            </div>
          </div>
        </section> */}
        <section className='uk-section-white uk-section-large fwk-home-section'  >
          <div className="uk-container uk-container-xlarge" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: div; delay: 200; repeat: true">
            <h2 className='uk-margin-large-top fwk-home-h2'>Our Arms.</h2>
            <div><h6 style={{ letterSpacing: '5px' }}>CREATIVE AGENCY</h6></div>
            <div className='uk-width-1-1' style={{ position: 'relative', backgroundColor: '' }}>
              <h1 style={{ fontSize: '300px', fontWeight: '700', color: '#F6F6F6' }} >Agency</h1>
              <div className='uk-width-1-1' style={{ position: 'absolute', top: '0' }}>
                <div className="" data-uk-grid>
                  <div className="uk-width-1-5@m"></div>
                  <div className="uk-width-1-3@m" >
                    <img src={Agency} />
                  </div>
                  <div className="uk-width-expand@m" >
                    <div style={{ position: 'absolute', bottom: '10px' }} >
                      <p className='uk-text-left'>A creative agency that helps brands and businesses get the attention they deserve by combining
                        creativity, strategy and innovation. </p>
                      <a href='/creative' className='uk-text-left'>View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section-white uk-section-large fwk-home-section'  >
          <div className="uk-container uk-container-xlarge" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: div; delay: 200; repeat: true">
            <div><h6 style={{ letterSpacing: '5px' }}>STUDIOS</h6></div>
            <div className='uk-width-1-1' style={{ position: 'relative', backgroundColor: '' }}>
              <h1 style={{ fontSize: '300px', fontWeight: '700', color: '#F6F6F6' }} >Studios</h1>
              <div className='uk-width-1-1' style={{ position: 'absolute', top: '0' }}>
                <div className="" data-uk-grid>
                  <div className="uk-width-1-5@m"></div>
                  <div className="uk-width-1-3@m" >
                    <img src={Studio} />
                  </div>
                  <div className="uk-width-expand@m" >
                    <div style={{ position: 'absolute', bottom: '10px' }} >
                      <p className='uk-text-left'>We tell authentic African stories through film and photography. We are dedicated to creating and
                        documenting authentic African narratives. </p>
                      <a href='/studio' className='uk-text-left'>View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section-white uk-section-large fwk-home-section'  >
          <div className="uk-container uk-container-xlarge" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: div; delay: 200; repeat: true">
            <div><h6 style={{ letterSpacing: '5px' }}>MEDIA BRANDS</h6></div>
            <div className='uk-width-1-1' style={{ position: 'relative', backgroundColor: '' }}>
              <h1 style={{ fontSize: '205px', fontWeight: '700', color: '#F6F6F6' }} >Media Brands</h1>
              <div className='uk-width-1-1' style={{ position: 'absolute', top: '0' }}>
                <div className="" data-uk-grid>
                  <div className="uk-width-1-5@m"></div>
                  <div className="uk-width-1-3@m" >
                    <img src={Brands} />
                  </div>
                  <div className="uk-width-expand@m" >
                    <div style={{ position: 'absolute', bottom: '10px' }} >
                      <p className='uk-text-left'>We are dedicated to building media brands that
shape the African cultural zeitgeist and narrative
 through authentic, inspiring and engaging storytelling. </p>
                      <a href='/media' className='uk-text-left'>View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section-white uk-section-large fwk-home-section'  >
          <div className="uk-container uk-container-xlarge" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: div; delay: 200; repeat: true">
            <div><h6 style={{ letterSpacing: '5px' }}>TECHNOLOGY</h6></div>
            <div className='uk-width-1-1' style={{ position: 'relative', backgroundColor: '' }}>
              <h1 style={{ fontSize: '220px', fontWeight: '700', color: '#F6F6F6' }} >Technology</h1>
              <div className='uk-width-1-1' style={{ position: 'absolute', top: '0' }}>
                <div className="" data-uk-grid>
                  <div className="uk-width-1-5@m"></div>
                  <div className="uk-width-1-3@m" >
                    <img src={Tech} />
                  </div>
                  <div className="uk-width-expand@m" >
                    <div style={{ position: 'absolute', bottom: '10px' }} >
                      <p className='uk-text-left'>We blend design and technology to create meaningful
experiences for brands through excellent UX, Design
And Development </p>
                      <a href='/tech' className='uk-text-left'>View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section-white uk-section-large fwk-home-section'  >
          <div className="uk-container uk-container-xlarge" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: div; delay: 200; repeat: true">
            <div><h6 style={{ letterSpacing: '5px' }}>FIRE X</h6></div>
            <div className='uk-width-1-1' style={{ position: 'relative', backgroundColor: '' }}>
              <h1 style={{ fontSize: '300px', fontWeight: '700', color: '#F6F6F6' }} >Fire X</h1>
              <div className='uk-width-1-1' style={{ position: 'absolute', top: '0' }}>
                <div className="" data-uk-grid>
                  <div className="uk-width-1-5@m"></div>
                  <div className="uk-width-1-3@m" >
                    <img src={Firex} />
                  </div>
                  <div className="uk-width-expand@m" >
                    <div style={{ position: 'absolute', bottom: '10px' }} >
                      <p className='uk-text-left'>We create and deliver unique live experiences.
Services: Live Events, Corporate Events, Forums &
Summits, Exhibitions, Brand & Product Launches.
 </p>
                      <a href='/firex' className='uk-text-left'>View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section-white uk-section-large fwk-home-section'  >
          <div className="uk-container uk-container-xlarge" uk-grid uk-scrollspy="cls: uk-animation-slide-bottom; target: div; delay: 200; repeat: true">
            <div><h6 style={{ letterSpacing: '5px' }}>FIREWORKS U</h6></div>
            <div className='uk-width-1-1' style={{ position: 'relative', backgroundColor: '' }}>
              <h1 style={{ fontSize: '180px', fontWeight: '700', color: '#F6F6F6' }} >Fireworks U</h1>
              <div className='uk-width-1-1' style={{ position: 'absolute', top: '0' }}>
                <div className="" data-uk-grid>
                  <div className="uk-width-1-5@m"></div>
                  <div className="uk-width-1-3@m" >
                    <img src={FireworksU} />
                  </div>
                  <div className="uk-width-expand@m" >
                    <div style={{ position: 'absolute', bottom: '10px' }} >
                      <p className='uk-text-left'>Arming individuals and organisations with knowledge
and strategies to grow world class brands
 </p>
                      <a href='/fireworksu' className='uk-text-left'>View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='uk-section-white uk-section-small fwk-home-section uk-margin-large-top' >
          <div className="uk-container uk-container-xlarge" >
            <h2 className='uk-margin-large-top fwk-home-h2'>Stories & Insights.</h2>
            <p className='uk-margin-medium-top'>Stories from the people at Fireworks</p>
            <div className="uk-text-left" data-uk-grid>
              <div className="uk-width-1-4@m">
                <img src={Blog1} />
                <div className='uk-padding-small'>
                  <h6 style={{ letterSpacing: '2px' }}>BRANDS</h6>
                  <h4 className='uk-margin-remove'>3 Reasons Why Your Brand Should Start A Podcast</h4>
                </div>
              </div>
              <div className="uk-width-1-4@m">
                <img src={Blog2} />
                <div className='uk-padding-small'>
                  <h6 style={{ letterSpacing: '2px' }}>DESIGN</h6>
                  <h4 className='uk-margin-remove'>How to Apply Design Thinking for your Business in 2019</h4>
                </div>
              </div>
              <div className="uk-width-1-4@m">
                <img src={Blog1} />
                <div className='uk-padding-small'>
                  <h6 style={{ letterSpacing: '2px' }}>BRANDS</h6>
                  <h4 className='uk-margin-remove'>3 Reasons Why Your Brand Should Start A Podcast</h4>
                </div>
              </div>
              <div className="uk-width-1-4@m">
                <img src={Blog2} />
                <div className='uk-padding-small'>
                  <h6 style={{ letterSpacing: '2px' }}>DESIGN</h6>
                  <h4 className='uk-margin-remove'>How to Apply Design Thinking for your Business in 2019</h4>
                </div>
              </div>
            </div>
            <div className='uk-margin-large  uk-text-center'>
              <a href=''>View More</a>
            </div>
          </div>
        </section>
        <section className='uk-section-secondary uk-section-large fwk-home-section' style={{ backgroundColor: '#000000' }}>
          <div className="uk-container uk-container-xlarge" >
            <div className="uk-text-left uk-margin-large-bottom" data-uk-grid>
              <div className="uk-width-1-2@m">
                <h2>Ready to launch an idea?</h2>
              </div>
              <div className="uk-width-1-2@m">
                <p>We’re excited to build amazing things with you!<br />
                  Call us on +234 8152 259 901 or <br />
                  say hello@fireworks.com.ng</p>
                <button className="uk-button uk-button-primary">Let's Talk</button>
              </div>
            </div>
            <hr />
          </div>
        </section>
        <Footer />

      </div>
    );
  }
}

export default App;
