import React, {Component} from 'react'
import logo from '../../img/fire_main.svg'

export default class Nav extends Component {
    render() {
        return (
            <div className='uk-container uk-container-large uk-margin-left uk-margin-right'>
            <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>

                <div className="uk-navbar-left">

                    <ul className="uk-navbar-nav">
                        <li className="uk-active"><img src={logo} width='150'/></li>
                    </ul>

                </div>

                <div className="uk-navbar-right">

                    <ul className="uk-navbar-nav ">
                        <li className="uk-active"><a className='uk-text-capitalize' href="#">Our Work</a></li>
                        <li className="uk-active"><a className='uk-text-capitalize' href="#">What We Do</a></li>
                        <li className="uk-active"><a className='uk-text-capitalize' href="#">Contact</a></li>
                    </ul>

                </div>

            </nav>
            </div>
        )
    }
}