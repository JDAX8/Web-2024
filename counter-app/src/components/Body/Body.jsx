import React, { useState } from "react";
import { exerciseGifs } from "../../data/arms";
import { exerciseImgs } from "../../data/armsimgs";

import "./Body.css";

export const Body = () => {
  const [counter, setCounter] = useState(0);
  const [serie, setSerie] = useState(1);
  const [imageIndex, setImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);
  const [text, setText] = useState("");

  const totalRepeticiones = exerciseGifs.length * 3.1;

  const handleClick1 = () => {
  if (counter < totalRepeticiones - 1) {
    setCounter(counter + 1);
	setShowImage(true);

    if (counter === 11) {
      setImageIndex(imageIndex + 1);
      setCounter(0);

      if (imageIndex === exerciseGifs.length - 1) {
        setSerie(serie + 1);
        setText(`HAS TERMINADO LA SERIE NÚMERO ${serie}, sigue así!`);
      }
    }
  }
};

  

  const handleClick2 = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setShowImage(true);

      if (counter === 12) {
        setImageIndex(imageIndex - 1);
      }
    }

    if (counter === 0) {
      setText("");
    }
  };

  const handleReset = () => {
    setCounter(0-1);
    setSerie(1);
    setImageIndex(0);
    setShowImage(false);
    setText("");
  };

  return (
    <div className="body-container">
      <h2>Contador de Repeticiones</h2>
      {showImage && (
		<div className="img-container">
			<img
			className="gym-img"
			key={exerciseGifs[imageIndex % exerciseGifs.length].id}
			src={exerciseGifs[imageIndex % exerciseGifs.length].src}
			/>
		</div>
      )}
      <div className="counter-body-container">
        {counter + 1} / {totalRepeticiones}
      </div>
      <div className="serie-body-container">
        Serie: {serie}
      </div>
      <div className="buttons">
        <button className="increase-button" onClick={handleClick1}>
          Suma una repetición
        </button>
        <button className="substract-button" onClick={handleReset}>
          Reinicia la serie
        </button>
        <button className="substract-button" onClick={handleClick2}>
          Resta una repetición
        </button>
      </div>
      {text && <p className="text-final">{text}</p>}
    </div>
  );
};
