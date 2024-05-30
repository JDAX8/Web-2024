import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

export function Footer() {
  return (
    <footer className="w-screen text-white bottom-0">
      <div className="border border-white"></div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center p-10">
        <section className="text-center">
          <h2 className="font-bold mb-5 text-lg text-base md:text-lg">About this website</h2>
          <ul className="list-none text-sm md:text-base">
            <li>This page was made with:</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </section>
        <section className="text-center mt-5 lg:mt-0">
          <h2 className="font-bold mb-5 text-lg text-base md:text-lg">Navigation</h2>
          <ul className="list-none text-sm md:text-base">
             <Link to="/">
              <li>Main</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
           
          </ul>
        </section>
        <section className="text-center mt-5 lg:mt-0">
          <h2 className="font-bold mb-5 text-lg text-base md:text-lg">Owners social media</h2>
          <ul className="list-none text-sm md:text-base">
            <li><a href="https://www.instagram.com/isaaccallecardozo/">Isaac Calle Cardozo</a></li>
            <li><a href="https://www.instagram.com/juans7123/">Juan Sebastian Silva</a></li>
            <li><a href="https://www.instagram.com/juandavidvalenciaam/">Juan David Valencia</a></li>
            <li><a href="https://www.instagram.com/juanmartinlopeze">Juan Martín López Escobar</a></li>
          </ul>
        </section>
      </div>
      <div className="border border-white"></div>
    </footer>
  );
}
