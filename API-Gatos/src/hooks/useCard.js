import { useState } from 'react'
import { fetchCatFacts, fetchCatImg } from '../services/index';


export const useCard = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [fact, setFact] = useState("");
    const [image, setImage] = useState("");
  
  
    const getCardInfo = async () => {
      setIsLoading(true);
  
      try {
        const factos = await fetchCatFacts();
        setFact(factos);
  
        const imagecat = await fetchCatImg();
        setImage(imagecat);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  

  return (
    {
        isLoading,
        fact,
        image,
        getCardInfo
    }
  )
}