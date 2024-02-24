import React from 'react'
import './ButtonKick.css'

export const kickButton = ({ text, icon, onClick }) => {
  return (
    <button className='boton' onClick={onClick}>
      {icon && <span className='icono'>{icon}</span>}
      <span className='texto'>{text}</span>
    </button>
  )
}
