import { legalfootercards } from '../../data/footer_data.js'
import { recursosfootercards } from '../../data/footer_data2.js'
import { idiomacards } from '../../data/idioma_data.js'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import kicklogo from '../../imgs/kick-logo-png.png'
import unfold from '../../imgs/unfold.png'
import { useState } from 'react'

import './FooterInfo.css'

export const FooterInfo = () => {
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    <footer className='principal-footer-container'>
      <div className='footer-logo-img'>
        <img src={kicklogo} alt='' />
      </div>
      <div className='leagles-title'>
        <h2>Legales</h2>
      </div>
      <div className='legal-container-main'>
        {legalfootercards.map((footer) => (
          <div key={footer.id} className='kick-footer'>
            <div className='legales-container'>
              <div className='div-color'>
                {footer.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='recursos-title'>
        <h2>Recursos</h2>
      </div>
      <div className='legal-container-main'>
        {recursosfootercards.map((footerR) => (
          <div key={footerR.id} className='recursos-footer'>
            <div className='recursos-container'>
              <div className='div-color'>
                {footerR.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='recursos-title'>
        <h2>Idioma</h2>
      </div>
      {menuVisible && (
        <div className='burguer-menu-footer'>
          <BurguerMenu legalfootercards={idiomacards} />
        </div>
      )}
      <button onClick={toggleMenu} className='boton-idioma'>
        {idiomacards.map((idioma) => (
          <div className='boton-idioma' key={idioma.id}>
            <img className='bandera' src={idioma.src} alt='' />
            <p>{idioma.title}</p>
            <img className='unfold-image' src={unfold} alt='' />
          </div>
        ))}

      </button>
    </footer>
  )
}
