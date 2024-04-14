export const fetchCatFacts = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact?max_length=200");
      const jsonData = await response.json();
      return jsonData.fact; 
    } catch (error) {
      console.error("Error trayendo la data:", error);
      return [];
    }
  }
  