import Threedots from '../../imgs/Three_dots.png'
import './NavBar.css'

export const NavBar = () => {
  return (
    <>
      <nav className='NavBar-container'>
        <div className='left-side'>
          <div className='logo-img-kick'>
            <a href=''>
              <img src='https://nerdordie.com/wp-content/uploads/2023/03/kick-streaming-logo.png' alt='' />
            </a>
          </div>
          <div className='Left-link-container'>
            <div className='Btn-leftside'>
              <a href=''> Explorar</a>
            </div>
            <div className='Options-btn'>
              <button><img src={Threedots} alt='' /></button>
            </div>
          </div>
        </div>
        <div className='mid-nav-container'>
          <div className='search-container'>
            <input type='search' placeholder='Buscar' />
            <div className='search-btn'>
              <img src='https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png' alt='' />
            </div>
          </div>
        </div>
        <div className='buttons-log-sign'>
          <div className='buttons-container'>
            <button className='login-button'>Iniciar sesión</button>
            <button className='signin-button'>Registrarse</button>
          </div>
        </div>
      </nav>
    </>
  )
}
