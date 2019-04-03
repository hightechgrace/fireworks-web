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
                        <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true;flip: true">
                            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                                <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                                    <li className="uk-nav-divider"></li>
                                    <li className="uk-active">
                                        <a href="/">Home</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}