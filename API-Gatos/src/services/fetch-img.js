export const fetchCatImg = async () => {
    try {
      const response = await fetch("https://cataas.com/cat");
      const jsonData = await response.json();
      return jsonData.data; 
    } catch (error) {
      console.error("Error trayendo la data:", error);
      return [];
    }
  }
  