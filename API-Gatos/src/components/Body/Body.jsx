import React, { useEffect, useState } from 'react';

export function Body() {
  const [dataGato, setDataGato] = useState([]);

  useEffect(() => {
    const fetchGato = async () => {
      try {
        const response = await fetch("https://catfact.ninja/facts?max_length=100&limit=10");
        const jsonData = await response.json();
        setDataGato(jsonData.data); // Assuming the response structure has a 'data' key
        console.log(jsonData.data);
      } catch (error) {
        console.error("Error trayendo la data:", error);
      }
    };

    fetchGato();
  }, []);

  return (
    <main>
      <p>HOLA</p>
      <ul>
        {dataGato.map((factObj, index) => (
          <li key={index}>{factObj.fact}</li>
        ))}
      </ul>
    </main>
  );
}
