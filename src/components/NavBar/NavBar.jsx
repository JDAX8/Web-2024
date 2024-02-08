import Threedots from "../imgs/Three_dots.png"
import './NavBar.css'


export const NavBar = () => {
  return (
    <>
    <nav class="NavBar-container">
        <div class="left-side">
            <div class="logo-img-kick">
                <a href="">
                <img src="https://nerdordie.com/wp-content/uploads/2023/03/kick-streaming-logo.png" alt="" />
                </a>
            </div>
            <div class="Left-link-container">
                <div class="Btn-leftside">
                    <a href=""> Explorar</a>
                </div>
                <div class="Options-btn">
                    <button><img src={Threedots} alt="" /></button>
                </div>
            </div>
            </div>
            <div class="mid-nav-container">
            <div class="search-container">
              <input type="search" placeholder="Buscar" />
              <div class="search-btn">
                <img src="https://static-00.iconduck.com/assets.00/search-icon-2044x2048-psdrpqwp.png" alt="" />
              </div>
              </div>
            </div>
          <div class="buttons-log-sign">
            <div class="buttons-container">
              <button class ="login-button">Iniciar sesión</button>
              <button class ="signin-button">Registrarse</button>
            </div>
          </div>
    </nav>
    </>
  );
};