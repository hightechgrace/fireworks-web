import React, { Component } from 'react';
import fire_white from '../../img/fire.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className="uk-section uk-section-secondary uk-light">
                <div className="uk-grid-match uk-child-width-expand@s uk-text-center uk-padding" data-uk-grid>
                    <div>
                        <div>
                            <img src={fire_white} width='140' />
                            {/* <p className='uk-text-meta uk-text-small uk-margin-remove'>2018. Fireworks<br /> All rights Reserved.</p> */}
                        </div>
                    </div>
                    <div>
                        <div className='uk-text-left'>
                            <h3>Office</h3>
                            <h5>Suite 1, 2nd floor<br />
                                Platinum Plaza<br />
                                Gwarinpa Abuja</h5>
                        </div>
                    </div>
                    <div>
                        <div className='uk-text-left'>
                            <h3>Start a conversation</h3>
                            <h5><a href='mailto:hello@fireworks.com.ng'>hello@fireworks.com.ng</a>
                                <br />
                                <br />
                                +234 80 999 999 999
                            </h5>
                        </div>
                    </div>
                    <div>
                        <div className='uk-text-left'>
                            <h3>Social</h3>
                            <h5><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='white '>Facebook</a> <br/>
                            <a href='https://twitter.com/FireworksHQ' target='blank_' className='white '>Twitter</a><br/>
                            <a href='https://www.instagram.com/fireworkshq/' target='blank_' className='white '>Instagram</a></h5>


                            
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}