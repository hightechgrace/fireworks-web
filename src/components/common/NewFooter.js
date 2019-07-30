import React, { Component } from 'react';
import logo from '../../img/fwk_logo_grey.svg';
import crtv from '../../img/fwk_crtv_grey.svg';
import studio from '../../img/fwk_studio_grey.svg';
import tech from '../../img/fwk_tech_grey.svg';
import uni from '../../img/fwk_uni_grey.svg';
import firex from '../../img/firex_grey.svg';
import young from '../../img/fwk_young_grey.svg';
import yanga from '../../img/yanga_grey.svg';
import tori from '../../img/tori.svg';
export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className='uk-visible@m uk-section-secondary uk-section-small fwk-home-section' style={{ backgroundColor: '#000000' }}>
          <div className="uk-container uk-container-large" >
            <div class="uk-flex uk-flex-center">
              <img className='uk-text-center' src={logo} width='250' />
            </div>
          </div>
          <div class="uk-flex uk-flex-center " style={{ marginTop: '-50px' }}>
            <div className="uk-width-3-4 uk-child-width-1-5@m uk-text-center uk-grid-small " data-uk-grid>
              <img src={crtv} />
              <img src={studio} />
              <img src={tech} />
              <img src={uni} />
              <img src={firex} style={{ width: '100px' }} />
            </div>
          </div>
          <div class="uk-flex uk-flex-center " style={{ marginTop: '0px' }}>
            <div className="uk-width-1-3 uk-child-width-1-3@m uk-text-center uk-xgrid-large " data-uk-grid>
              <img src={young} />
              <img src={yanga} />
              <img src={tori} />
            </div>
          </div>
          <div class="uk-flex uk-flex-center uk-margin-top">
            <div className='uk-grid-small uk-text-center' data-uk-grid>
              <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='footer_gray uk-icon-link' uk-icon="facebook"></a></div>
              <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='footer_gray uk-icon-link' uk-icon="twitter"></a></div>
              <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='footer_gray uk-icon-link' uk-icon="instagram"></a></div>
            </div>
          </div>
          <p className='uk-text-center footer_gray'>Suite 1, 3rd Floor, Platinum Plaza, Gwarinpa Abuja.</p>
        </section>
        <section className='uk-hidden@m uk-section-secondary uk-section-small' style={{ backgroundColor: '#000000' }}>
          <div class="uk-text-center" data-uk-grid>
            <div class="uk-width-1-5"></div>
            <div class="uk-width-3-5">
              <a href='/'><img src={logo} /></a>
            </div>
            <div class="uk-width-1-5"></div>

          </div>
          <div class="uk-text-center uk-padding uk-padding-remove-top uk-margin-remove-top" data-uk-grid>
            <div class="uk-width-1-3">
              <a href='/creative'><img src={crtv} /></a>
            </div>
            <div class="uk-width-1-3">
              <a href='/studio'><img src={studio} /></a>
            </div>
            <div class="uk-width-1-3">
              <a href='/tech'><img src={tech} /></a>
            </div>
          </div>
          <div class="uk-text-center uk-padding uk-padding-remove-top uk-margin-remove-top" data-uk-grid>
            <div class="uk-width-1-3">
              <a href='/fireworksu'><img src={uni} /></a>
            </div>
            <div class="uk-width-1-3">
              <a href='/firex'><img src={firex} /></a>
            </div>
          </div>
          <div class="uk-text-center uk-padding uk-padding-remove-top uk-margin-remove-top" data-uk-grid>
            <div class="uk-width-1-3">
              <a href=''><img src={young} /></a>
            </div>
            <div class="uk-width-1-3">
              <a href=''><img src={yanga} /></a>
            </div>
            <div class="uk-width-1-3">
              <a href=''><img src={tori} /></a>
            </div>
          </div>
          <div class="uk-flex uk-flex-center uk-margin-top">
            <div className='uk-grid-small uk-text-center' data-uk-grid>
              <div><a href='https://www.facebook.com/FireworksHQTRS/' target='blank_' className='footer_gray uk-icon-link' uk-icon="facebook"></a></div>
              <div><a href='https://twitter.com/FireworksHQ' target='blank_' className='footer_gray uk-icon-link' uk-icon="twitter"></a></div>
              <div><a href='https://www.instagram.com/fireworkshq/' target='blank_' className='footer_gray uk-icon-link' uk-icon="instagram"></a></div>
            </div>
          </div>
          <p className='uk-text-center footer_gray'>Suite 1, 3rd Floor, Platinum Plaza,<br /> Gwarinpa Abuja.</p>
        </section>
      </div>
    )
  }
}