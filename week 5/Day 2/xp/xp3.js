// Exercise 3: 
async function fetchStarWarsData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const objectStarWars = await response.json();
      
      console.log("Star Wars Starship Data:");
      console.log(objectStarWars.result);
      
      return objectStarWars.result;
    } catch (error) {
      console.error("Error fetching Star Wars data:", error);
    }
  }
  
  console.log("Starting to fetch Star Wars data...");
  fetchStarWarsData();