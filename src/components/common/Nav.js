import React, {Component} from 'react'
import logo from '../../img/fire_main.svg'
import logo_white from '../../img/fire.svg'
import menu from '../../img/menu.svg'

export default class Nav extends Component {
    render() {
        return (
            <div>
            <div className='uk-visible@s  uk-container uk-container-large uk-margin-left uk-margin-right'>
            <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><a href='/home'><img src={logo} width='150'/></a></li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav ">
                        <li className="uk-active"><a className='uk-text-capitalize' href="/work">Our Work</a></li>
                        <li className="uk-active"><a className='uk-text-capitalize' href="/about">About Us</a></li>
                        <li className="uk-active"><a className='uk-text-capitalize' href="/contact">Contact</a></li>
                    </ul>

                </div>

            </nav>
            </div>

            <div className="uk-offcanvas-content  uk-hidden@s " data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" style={{ backgroundColor: '#fff' }}>
                        <nav className="uk-navbar-transparent uk-navbar uk-navbar-container">
                            <div className="uk-navbar-left">
                                <a className="uk-navbar-item uk-logo" href="/home">
                                    <img src={logo} alt='' width='100' />
                                </a>
                            </div>
                            <div className="uk-navbar-right">
                                <a className="uk-navbar-toggle " data-uk-navbar-toggle-icon href="#" data-uk-toggle="target: #offcanvas-nav-primary"><img src={menu} alt='' width='70' /></a>
                            </div>
                        </nav>

                        <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar uk-flex uk-flex-column" style={{ backgroundColor: '#000' }}>

                                <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                                    <img className=' uk-margin-bottom' src={logo_white} alt='' width='100' />
                                    <li className="uk-nav-divider uk-margin-top"></li>

                                    <li>
                                        <a className='white' style={{fontSize:'16px'}} href="/work">Our Work</a>
                                    </li>
                                    <li>
                                        <a className='white' style={{fontSize:'16px'}} href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a className='white' style={{fontSize:'16px'}} href="/about">Contact Us</a>
                                    </li>
                                    

                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}