import React, { useState } from 'react';
import { Body } from './components/Body/Body'
import { Footer } from './components/Footer/Footer';
import { Header }  from './components/Header/Header';

const gifs = [
  "gif1.gif",
  "gif2.gif",
  "gif3.gif",
  "gif4.gif",
];

export function App() {
  const [count, setCount] = useState(0);
  const [currentGif, setCurrentGif] = useState(0);

  const handleIncrement = () => {
    if (count < 11) {
      setCount(count + 1);
    }
    if (count === 11) {
      setCurrentGif(currentGif + 1);
      setCount(0);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
    setCurrentGif(0);
  };

  return (
    <div>
      <Header />
      <Body count={count} gif={gifs[currentGif]} />
      <Footer
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </div>
  );
}
