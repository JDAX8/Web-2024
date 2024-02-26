import React from 'react';

export const Footer = ({ handleIncrement, handleDecrement, handleReset }) => {
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reiniciar</button>
    </div>
  );
};


