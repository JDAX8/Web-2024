import React from 'react';
import { Button } from '../Button/Button';
import './Card.css';

export function Card({ nombre, userimage, description, socialmedia, onClick }) {

  const handleOnClick = () => {
    onClick();
  }

  const goToSocial = (link) => {
    window.open(link, '_blank');
  }

  const redessociales = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png',
    'https://seeklogo.com/images/B/behance-logo-1373E40919-seeklogo.com.png',
    'https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_1280.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png',
  ];

  return (
    <div className="bg-[#2c2c2c] rounded-3xl w-[350px] cell:w-[740px] h-full flex flex-col lg:flex-row justify-center py-10 min-h-[400px]">
      <div className="px-card-left w-full lg:w-1/2 flex items-center justify-center">
        <div className="userimg w-64 h-64 rounded-2xl overflow-hidden">
          <img
            src={userimage}
            className="userimg rounded-2xl w-64 h-64"
            alt=""
          />
        </div>
      </div>
      <div className="px-card-right flex flex-col justify-between items-center h-full w-full lg:w-1/2 mt-10 lg:mt-0 p-5 lg:p-10">
        <div className="text-center">
          <h1 className="px-card-name text-2xl font-bold">{nombre}</h1>
          <div className="px-card-description mt-4">
            <p>{description}</p>
          </div>
        </div>
        <div className="px-card-socialmedia flex justify-center mt-5 space-x-4">
          {redessociales?.map((source, index) => (
            <img
              key={index}
              className="px-card-socialmedia-img w-12 h-12 cursor-pointer"
              src={source}
              alt=""
              onClick={() => goToSocial(socialmedia[index])}
            />
          ))}
        </div>
        <Button className="w-40 h-10 mt-10 text-white" title={"View profile"} onClick={handleOnClick}></Button>
      </div>
    </div>
  );
};
