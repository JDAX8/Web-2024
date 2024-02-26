import React from 'react';
import gifImage from './gifs/{{ gif }}';

export const Body = ({ count, gif }) => {
  return (
    <div>
      <h1>Contador de repeticiones</h1>
      <p>Ejercicio: {gif}</p>
      <h2>{count}</h2>
      <img src={gifImage} alt="Ejercicio" />
    </div>
  );
};

