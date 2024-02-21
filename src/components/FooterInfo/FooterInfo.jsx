import React from 'react'
import { legalfootercards } from '../../data/footer_data'
import { recursosfootercards } from '../../data/footer_data2'
import kicklogo from '../../imgs/kick-logo-png.png'
export const FooterInfo = () => {
  return (
    <footer className='principal-footer-container'>
      <div className='footer-logo-img'>
        <img src={kicklogo} alt='' />
      </div>
      <div className='leagles-title'>
        <h2>Legales</h2>
      </div>
      {legalfootercards.map((footer) => (
        <div key={footer.id} className='kick-footer'>
          <div className='legales-container'>
            {footer.title}
          </div>
        </div>
      ))}
      <div className='recursos-title'>
        <h2>Recursos</h2>
      </div>
      {recursosfootercards.map((footerR) => (
        <div key={footerR.id} className='recursos-footer'>

          <div className='recursos-container'>
            {footerR.title}
          </div>
        </div>
      ))}

    </footer>
  )
}
