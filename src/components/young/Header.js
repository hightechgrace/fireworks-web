import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="uk-position-top">
                <div className="uk-offcanvas-content ">
                    <nav className="uk-navbar-transparent uk-navbar uk-navbar-container">
                        <div className="uk-navbar-right">
                            <a className="uk-navbar-toggle" data-uk-toggle="target: #offcanvas-nav-primary"><span uk-icon="icon: grid; ratio: 2"></span></a>
                        </div>
                    </nav>
                    <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true;flip: true uk-dark" >
                        <div className="uk-offcanvas-bar uk-flex uk-flex-column " style={{ backgroundColor: '#fff' }}>
                            <ul className="uk-nav  uk-nav-left uk-margin-auto-vertical uk-dark">
                                <li className="uk-active uk-dark ">
                                    <a className='black' href="/young">Home</a>
                                </li>
                                <li className="uk-active uk-dark ">
                                    <a className='black' href="/tori">Tori of Love</a>
                                </li>
                                <li className="uk-active uk-dark ">
                                    <a className='black' href="/pop">Young Pop</a>
                                </li>
                                <li className="uk-active uk-dark ">
                                    <a className='black' href="/cafe">The Cafe</a>
                                </li>
                                <li className="uk-active uk-dark ">
                                    <a className='black' href="/waves">Waves</a>
                                </li>
                                <li className="uk-active uk-dark ">
                                    <a className='black' href="/young">Success Stories</a>
                                </li>
                                <hr/>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}