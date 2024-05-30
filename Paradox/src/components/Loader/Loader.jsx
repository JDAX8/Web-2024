import React from 'react';
import Logo from '../../assets/imgs/Logo.png'

export function Loader({className=''}) {

  return (
    <div className={`flex w-screen  items-center justify-center p-20 ${className}`}>
        <img src={Logo} className='flex flex-col w-20 animate-spin'/>
    </div>
        
  );
};
