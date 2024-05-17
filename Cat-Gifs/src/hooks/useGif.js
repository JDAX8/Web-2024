import { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

export const useGif = () => {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos'));
    if (favoritosGuardados) {
      setFavoritos(favoritosGuardados);
    }
  }, []);

  const handleOnChange = async (value) => {
    console.log(value)
    const search = value.trim();
    setSearchWord(search);
    setLoading(true); // Establecer loading a true mientras se realiza la búsqueda
    try {
      const datos = await getGifs(search); // Llamar a getGifs con el término de búsqueda actualizado
      console.log(datos.data)
      setData(datos.data); // Actualizar los datos con los resultados de la búsqueda
    } catch (error) {
      console.error('Error fetching gifs:', error);
    } finally {
      setLoading(false); 
    }
  };


  const addFavorite = (gif) => {
    const currentFavorites = favoritos; 
    const nuevosFavoritos = [...currentFavorites, gif];
    setFavoritos(nuevosFavoritos);
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
  };

  return {
    handleOnChange,
    addFavorite,
    data,
    searchWord,
    loading,
    favoritos
  };
};
