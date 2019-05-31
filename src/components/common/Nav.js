import React, { Component } from 'react'
import logo_white from '../../img/fwk_logo_black.svg';
import icon from '../../img/fwk_icon_white.svg'
import close from '../../img/close_white.svg'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className="uk-visible@m uk-position-top uk-margin-large-left uk-margin-large-right">
                    <nav className="uk-navbar-container uk-navbar-transparent " data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active"><a href="/"><img src={logo_white} width='190' /></a></li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li><a href="#" data-uk-toggle="target: #offcanvas-flip" className='menu_btn'>menu</a></li>
                                <div className='' id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
                                    <div className="uk-animation-fade uk-offcanvas-bar uk-width-1-1" style={{ backgroundColor: '#000' }}>

                                        <a className="uk-offcanvas-close uk-margin white"  > <img src={close} width='30' /></a>
                                        <img src={icon} width='50' />
                                        <div className="uk-margin-large-top" data-uk-grid>
                                            <div className="uk-width-1-5@m white uk-text-right uk-margin-large-left uk-text-bold ">
                                                <p className='menu-vertical'>MENU</p></div>
                                            <div className="uk-width-2-5@m white " >
                                                <div className="uk-child-width-1-3@m" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: li ; delay: 200; repeat: true">
                                                    <ul className="uk-nav-primary uk-nav-parent-icon white" data-uk-nav>
                                                        <li ><a className="white header-txt" href="#">Work</a></li>
                                                        <li ><a className="white header-txt" href="/about">About</a></li>
                                                        <li ><a className="white header-txt" href="/contact">Contact</a></li>
                                                        <li ><a className="white header-txt" href="#">Stories</a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="uk-width-expand@m " >
                                                <div style={{ position: 'absolute', bottom: '150px' }} >
                                                    <div data-uk-scrollspy="cls: uk-animation-slide-bottom; target: p ; delay: 400; repeat: true">
                                                        <p className='uk-text-left white'>
                                                            hello@fireworks.com.ng
                                                </p>
                                                        <p className='uk-text-left white'>
                                                            +234 8152 259 901
                                                </p>
                                                        <p className='uk-text-left white'>
                                                            Suite 1, 3rd Floor, Platinum Plaza,
                                                <br />Gwarinpa Abuja.
                                                </p>
                                                        <div className='uk-grid-small uk-text-center' data-uk-grid>
                                                            <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='white uk-icon-link' uk-icon="facebook"></a></div>
                                                            <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='white uk-icon-link' uk-icon="twitter"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='white uk-icon-link' uk-icon="instagram"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='white uk-icon-link' uk-icon="linkedin"></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* Mobile Nav */}
                <div className='uk-hidden@m'>
                    <nav className="uk-navbar-container  uk-margin-right" data-uk-navbar style={{backgroundColor:'#fff'}}>
                    <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active uk-margin-small-top"><a href="/"><img src={logo_white} width='130' /></a></li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li><a href="#" data-uk-toggle="target: #mobile-menu" className='mobile_menu_btn'>menu</a></li>
                                <div className='' id="mobile-menu" data-uk-offcanvas="flip: true; overlay: true">
                                    <div className="uk-animation-fade uk-offcanvas-bar uk-width-1-1" style={{ backgroundColor: '#000' }}>
                                        <a className="uk-offcanvas-close uk-margin white"  > <img src={close} width='30' /></a>
                                        <img src={icon} width='50' />
                                        <div className='uk-margin-xlarge'>
                                            <ul className=" white uk-margin-large-left" data-uk-nav data-uk-scrollspy="cls: uk-animation-fade; target: li ; delay: 400; repeat: true">
                                                <li ><a className="white mobile-header-txt short_text" href="#">Work</a></li>
                                                <li ><a className="white mobile-header-txt short_text" href="/about">About</a></li>
                                                <li ><a className="white mobile-header-txt short_text" href="contact">Contact</a></li>
                                                <li ><a className="white mobile-header-txt short_text" href="#">Stories</a></li>
                                            </ul>
                                            <div className=" white uk-margin-large-left uk-margin-large-top">
                                                <p className='uk-text-left white'>
                                                    hello@fireworks.com.ng
                                                </p>
                                                <p className='uk-text-left white'>
                                                    +234 8152 259 901
                                                </p>
                                                <p className='uk-text-left white'>
                                                    Suite 1, 3rd Floor, Platinum Plaza,
                                                <br />Gwarinpa Abuja.
                                                </p>
                                                <div className='uk-grid-small uk-text-center' data-uk-grid>
                                                    <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='white uk-icon-link' uk-icon="facebook"></a></div>
                                                    <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='white uk-icon-link' uk-icon="twitter"></a></div>
                                                    <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='white uk-icon-link' uk-icon="instagram"></a></div>
                                                    <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='white uk-icon-link' uk-icon="linkedin"></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
                {/* <div className="uk-hidden@m uk-position-top uk-margin-left uk-margin-right">
                    <nav className="uk-navbar-container " data-uk-navbar>
                        <div className="uk-navbar-left">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active uk-margin-small-top"><a href="/"><img src={logo_white} width='130' /></a></li>
                            </ul>
                        </div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li><a href="#" data-uk-toggle="target: #mobile-menu" className='mobile_menu_btn'>menu</a></li>
                                <div className='' id="mobile-menu" data-uk-offcanvas="flip: true; overlay: true">
                                    <div className="uk-animation-fade uk-offcanvas-bar uk-width-1-1" style={{ backgroundColor: '#fff' }}>
                                        <a className="uk-offcanvas-close uk-margin white"  > <img src={close} width='30' /></a>
                                        <img src={icon} width='50' />
                                        <div className='uk-margin-xlarge'>
                                            <ul className=" white uk-margin-large-left" data-uk-nav data-uk-scrollspy="cls: uk-animation-fade; target: li ; delay: 400; repeat: true">
                                                <li ><a className="white mobile-header-txt short_text" href="#">Work</a></li>
                                                <li ><a className="white mobile-header-txt short_text" href="/about">About</a></li>
                                                <li ><a className="white mobile-header-txt short_text" href="contact">Contact</a></li>
                                                <li ><a className="white mobile-header-txt short_text" href="#">Stories</a></li>
                                            </ul>
                                            <div className=" white uk-margin-large-left uk-margin-top">
                                                <p className='uk-text-left white'>
                                                    hello@fireworks.com.ng
                                                </p>
                                                <p className='uk-text-left white'>
                                                    +234 8152 259 901
                                                </p>
                                                <p className='uk-text-left white'>
                                                    Suite 1, 3rd Floor, Platinum Plaza,
                                                <br />Gwarinpa Abuja.
                                                </p>
                                                <div className='uk-grid-small uk-text-center' data-uk-grid>
                                                    <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='white uk-icon-link' uk-icon="facebook"></a></div>
                                                    <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='white uk-icon-link' uk-icon="twitter"></a></div>
                                                    <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='white uk-icon-link' uk-icon="instagram"></a></div>
                                                    <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='white uk-icon-link' uk-icon="linkedin"></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div> */}
            </div>
        )
    }
}