export const fetchCatImg = async () => {
    try {
      const response = await fetch("https://cataas.com/cat");
      return response.url; 
    } catch (error) {
      console.error("Error trayendo la data:", error);
      return [];
    }
  }
  