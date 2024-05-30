import { useState } from 'react';

export const useScrollInfo = (dataProjects) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousInfo = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? dataProjects.length - 1 : prevIndex - 1));
  };

  const nextInfo = () => {
    setCurrentIndex((prevIndex) => (prevIndex === dataProjects.length - 1 ? 0 : prevIndex + 1));
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? dataProjects.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === dataProjects.length - 1 ? 0 : currentIndex + 1;
  };
  

  return {
    currentIndex,
    previousInfo,
    nextInfo,
    getPreviousIndex,
    getNextIndex
  };
};
