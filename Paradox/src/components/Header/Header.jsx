import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import Logo from '../../assets/imgs/Logo.png';
import Title from '../../assets/imgs/Title.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const { actualUser, userIsLogged, logOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const goToLoginPage = () => navigate('/login');

  return (
    <header
      id="header"
      className={`fixed w-full z-50 bg-black text-white bottom-full cell:p-4 transition-transform duration-300 ${
        visible ? 'transform translate-y-full' : ''
      }`}
    >
      <div className="mx-auto px-16">
        <div className="flex flex-col justify-between items-center py-4 w-full cell:flex-row cell:justify-center">
          <div className="flex items-center cell:w-1/2">
            <Link to="/">
              <img className="w-10 h-10 mr-4" src={Logo} alt="logo" />
            </Link>
            <Link to="/">
              <img className="w-34 h-10 hidden cell:flex" src={Title} alt="title" />
            </Link>
          </div>
          <div className="flex justify-end space-x-4 items-center pt-2 cell:w-1/2">
            <ResponsiveLink to="/projects" desktopText="Projects" />
            <ResponsiveLink to="/about" desktopText="About us" />
            <ResponsiveLink to="/contact" desktopText="Contact Us" />
            {userIsLogged ? (
              <>
                {actualUser && (
                  <>
                    <Link to="/post" className="block cell:hidden text-gray-300 hover:text-gray-100">Post</Link>
                    <Link to="/post" className="hidden cell:block">
                      <Button className="w-4/6" type="button" title="Post"></Button>
                    </Link>
                  </>
                )}
                <LogBtn
                  className="w-4/6 h- mt-10"
                  type="button"
                  text="Logout"
                  onClick={logOut}
                />
              </>
            ) : (
              <LogBtn
                className="w-4/6 h- mt-10"
                type="button"
                text="Login"
                onClick={goToLoginPage}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );

  function LogBtn({ text, onClick }) {
    return (
      <button
        className="border-none rounded-3xl bg-gradient-to-r from-[#BE7DDD] to-violet-200 text-black w-fit px-10 hover:text-white h-fit font-semibold flex items-center justify-center"
        onClick={onClick}
      >
        <span>{text}</span>
      </button>
    );
  }

  function ResponsiveLink({ to, desktopText }) {
    return (
      <Link to={to} className="text-gray-300 hover:text-gray-100 flex items-center">
        <span>{desktopText}</span>
      </Link>
    );
  }
}
