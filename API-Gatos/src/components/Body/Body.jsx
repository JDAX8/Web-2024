import React, { useEffect, useState } from 'react';

const [dataGato, setDataGato] = useState({});

useEffect(() => {
  const fetchGato = async () => {
    try {
      const response = await fetch("https://catfact.ninja/facts?max_length=100&limit=10");
      setDataGato(response.data)
      console.log(response.data)
    } catch (error) {
      console.error("Error trayendo la data:", error)
    }
  };
  fetchGato();
}, []);

export function Body(){
    return(
      <main>
        <p>HOLA</p>
        <p>{}</p>
      </main>
    )
}