import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import wavesBG from './img/wavesBG.jpg'
import reactLogo from './img/logo/react.png'


export default class Waves extends Component {
    render() {
        return (
            <div>
                <div className="uk-cover-container" data-uk-height-viewport style={{ backgroundColor: '#6A7CB5' }}>

                    <div class="uk-position-center uk-width-2-3 ">
                    <div class="uk-child-width-expand@s uk-padding" data-uk-grid>
                        <div class="uk-grid-item-match">
                            <div class="uk-card uk-card-default ">
                               <img src={wavesBG} />
                            </div>
                        </div>
                        <div className='uk-light'>
                            <img src={reactLogo} width='140'/>
                            <h3>Heading</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    </div>

                    <Header />
                </div>


                <Footer />
            </div >

        )
    }
}