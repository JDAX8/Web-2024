import React, { useEffect, useState } from 'react';
import { CatCard } from '../CatCard/CatCard';
import { Loader } from '../Loader/Loader';
import { useCard } from '../../hooks/useCard'

export function Body() {

  const {isLoading, fact, image, getCardInfo} = useCard()
  
    useEffect(() => {
      getCardInfo();
    }, []);

  const handleClick = () => {
    getCardInfo();
  }

  return (
    <main>
      {isLoading ? <Loader /> : <CatCard image={image} fact={fact} Clicked={handleClick}/>} {/* Muestra el hecho subrayado */}
    </main>
  );
}
