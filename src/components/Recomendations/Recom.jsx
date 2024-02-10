import React from "react";
import contractIcon from "../../imgs/contract.png";


export const Recommended = () => {
  return (
    <>
        <div className="Foryou">
            <p>CANALES RECOMENDADOS</p>
            <button className="contractbttn">
            <img className="btnimg" src={contractIcon} alt="Contract Icon" />
            </button>
        </div>
    </>
  );
};