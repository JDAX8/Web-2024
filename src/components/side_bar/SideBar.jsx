import React, { useState, useEffect } from "react";
import { SideChannel } from "../side_channels/channels";
import { Recommended } from "../Recomendations/Recom";
import { SmallSideBar } from "../Small_sidebar/S_sideBar";
import './SideBar.css'

export function SideBar() {
  const [Open, setOpen] = useState(true);

  const toggleOpen = () => {
    setOpen(!Open); 
  };

  useEffect(() => {
    const button = document.querySelector(".contractbttn");
    button.addEventListener("click", toggleOpen); 
    return () => {
      button.removeEventListener("click", toggleOpen);
    };
  }, []); // Ejecuta el efecto una sola vez al montar el componente
  return (
    <div className="B-Sidebar">
      <div className="SideBar">
        {Open &&( // Si el estado Open es verdadero, renderiza el contenido de la barra lateral grande
          <>
          <div>
          <Recommended></Recommended>
          </div>
            <div>
              <SideChannel></SideChannel>
            </div>
          </>
        )}
        {!Open &&( // Si el estado Open es falso, renderiza el contenido de la barra lateral pequeña
          <>
          <div>
            <SmallSideBar></SmallSideBar>
          </div>
          </>
        )}
      </div>
    </div>
  );
}
