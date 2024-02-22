import './BurguerMenu.css'

export const BurguerMenu = ({
  legalfootercards = {},
  showImage = true
}) => {
  const menuHeight = `${legalfootercards.length * 31}px`

  return (
    <div className='menu-hamburguesa' style={{ height: menuHeight }}>
      {legalfootercards.map((legal) => (
        <div className='burguer-option' key={legal.id}>
          {showImage && <img className='imagen-idioma' src={legal.src} alt='' />}
          {legal.title}
        </div>
      ))}
    </div>
  )
}
