export const fetchCatFacts = async () => {
    try {
      const response = await fetch("https://catfact.ninja/facts?max_length=100&limit=10");
      const jsonData = await response.json();
      return jsonData.data; 
    } catch (error) {
      console.error("Error trayendo la data:", error);
      return [];
    }
  }
  