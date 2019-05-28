import React, { Component } from 'react'
import logo_white from '../../img/fwk_logo_white.svg';
import icon from '../../img/fwk_icon_black.svg'
import close from '../../img/close.svg'

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
                                    <div className="uk-animation-fade uk-offcanvas-bar uk-width-1-1" style={{ backgroundColor: '#fff' }}>
                                        <a className="uk-offcanvas-close uk-margin black"  > <img src={close} width='30' /></a>
                                        <img src={icon} width='50' />
                                        <div className="uk-margin-large-top" data-uk-grid>
                                            <div className="uk-width-1-5@m black uk-text-right uk-margin-large-left uk-text-bold ">
                                                <p className='menu-vertical'>MENU</p></div>
                                            <div className="uk-width-2-5@m black " >
                                                <div className="uk-child-width-1-3@m" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: li ; delay: 200; repeat: true">
                                                    <ul className="uk-nav-primary uk-nav-parent-icon black" data-uk-nav>
                                                        <li ><a className="black header-txt" href="#">Work</a></li>
                                                        <li ><a className="black header-txt" href="/about">About</a></li>
                                                        <li ><a className="black header-txt" href="contact">Contact</a></li>
                                                        <li ><a className="black header-txt" href="#">Stories</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="uk-width-expand@m" >
                                                <div style={{ position: 'absolute', bottom: '150px' }} >
                                                    <div data-uk-scrollspy="cls: uk-animation-slide-bottom; target: p ; delay: 400; repeat: true">
                                                        <p className='uk-text-left black'>
                                                            hello@fireworks.com.ng
                                                </p>
                                                        <p className='uk-text-left black'>
                                                            +234 8152 259 901
                                                </p>
                                                        <p className='uk-text-left black'>
                                                            Suite 1, 3rd Floor, Platinum Plaza,
                                                <br />Gwarinpa Abuja.
                                                </p>
                                                        <div className='uk-grid-small uk-text-center' data-uk-grid>
                                                            <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='black uk-icon-link' uk-icon="facebook"></a></div>
                                                            <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='black uk-icon-link' uk-icon="twitter"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="instagram"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="linkedin"></a></div>
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
                <div className="uk-hidden@m uk-position-top uk-margin-left uk-margin-right">
                    <nav className="uk-navbar-container uk-navbar-transparent " data-uk-navbar>
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
                                        <a className="uk-offcanvas-close uk-margin black"  > <img src={close} width='30' /></a>
                                        <img src={icon} width='50' />
                                        <div className='uk-margin-xlarge'>
                                            <ul className=" black uk-margin-large-left" data-uk-nav data-uk-scrollspy="cls: uk-animation-fade; target: li ; delay: 400; repeat: true">
                                                <li ><a className="black mobile-header-txt short_text" href="#">Work</a></li>
                                                <li ><a className="black mobile-header-txt short_text" href="/about">About</a></li>
                                                <li ><a className="black mobile-header-txt short_text" href="contact">Contact</a></li>
                                                <li ><a className="black mobile-header-txt short_text" href="#">Stories</a></li>
                                            </ul>
                                            <div className=" black uk-margin-large-left uk-margin-top">
                                                <p className='uk-text-left black'>
                                                    hello@fireworks.com.ng
                                                </p>
                                                <p className='uk-text-left black'>
                                                    +234 8152 259 901
                                                </p>
                                                <p className='uk-text-left black'>
                                                    Suite 1, 3rd Floor, Platinum Plaza,
                                                <br />Gwarinpa Abuja.
                                                </p>
                                                <div className='uk-grid-small uk-text-center' data-uk-grid>
                                                    <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='black uk-icon-link' uk-icon="facebook"></a></div>
                                                    <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='black uk-icon-link' uk-icon="twitter"></a></div>
                                                    <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="instagram"></a></div>
                                                    <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="linkedin"></a></div>
                                                </div>
                                            </div>




                                            {/* <div className="uk-width-expand@m uk-margin-large-left" >
                                                <div style={{ position: 'absolute', bottom: '150px' }} >
                                                    <div data-uk-scrollspy="cls: uk-animation-slide-bottom; target: p ; delay: 400; repeat: true">
                                                        <p className='uk-text-left black'>
                                                            hello@fireworks.com.ng
                                                </p>
                                                        <p className='uk-text-left black'>
                                                            +234 8152 259 901
                                                </p>
                                                        <p className='uk-text-left black'>
                                                            Suite 1, 3rd Floor, Platinum Plaza,
                                                <br />Gwarinpa Abuja.
                                                </p>
                                                        <div className='uk-grid-small uk-text-center' data-uk-grid>
                                                            <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='black uk-icon-link' uk-icon="facebook"></a></div>
                                                            <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='black uk-icon-link' uk-icon="twitter"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="instagram"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="linkedin"></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>



                                        <div className="uk-margin-large-top " data-uk-grid>
                                            {/* <div className="" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: li ; delay: 200; repeat: true">
                                                <ul className="uk-nav-primary uk-nav-parent-icon black" data-uk-nav>
                                                    <li ><a className="black mobile-header-txt" href="#">Work</a></li>
                                                    <li ><a className="black mobile-header-txt" href="/about">About</a></li>
                                                    <li ><a className="black mobile-header-txt" href="contact">Contact</a></li>
                                                    <li ><a className="black mobile-header-txt" href="#">Stories</a></li>
                                                </ul>
                                            </div> */}
                                            {/* <div className="uk-width-1-5@m black uk-text-right uk-margin-large-left uk-text-bold ">
                                                <p className='menu-vertical'>MENU</p></div> */}
                                            {/* <div className="uk-width-1-1@m black " >
                                                <div className="uk-child-width-1-3@m" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: li ; delay: 200; repeat: true">
                                                    <ul className="uk-nav-primary uk-nav-parent-icon black" data-uk-nav>
                                                        <li ><a className="black header-txt" href="#">Work</a></li>
                                                        <li ><a className="black header-txt" href="/about">About</a></li>
                                                        <li ><a className="black header-txt" href="contact">Contact</a></li>
                                                        <li ><a className="black header-txt" href="#">Stories</a></li>
                                                    </ul>
                                                </div>
                                            </div> */}
                                            {/* <div className="uk-width-expand@m" >
                                                <div style={{ position: 'absolute', bottom: '150px' }} >
                                                    <div data-uk-scrollspy="cls: uk-animation-slide-bottom; target: p ; delay: 400; repeat: true">
                                                        <p className='uk-text-left black'>
                                                            hello@fireworks.com.ng
                                                </p>
                                                        <p className='uk-text-left black'>
                                                            +234 8152 259 901
                                                </p>
                                                        <p className='uk-text-left black'>
                                                            Suite 1, 3rd Floor, Platinum Plaza,
                                                <br />Gwarinpa Abuja.
                                                </p>
                                                        <div className='uk-grid-small uk-text-center' data-uk-grid>
                                                            <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='black uk-icon-link' uk-icon="facebook"></a></div>
                                                            <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='black uk-icon-link' uk-icon="twitter"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="instagram"></a></div>
                                                            <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='black uk-icon-link' uk-icon="linkedin"></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>


                                    </div>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div >
        )
    }
}