// Exercise 1: 
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const apiUrl = `https://api.giphy.com/v1/gifs/search?q=funny&limit=25&rating=g&api_key=${apiKey}`;

async function fetchRandomGif() {
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    

    const data = await response.json();
    
    if (!data.data || data.data.length === 0) {
      throw new Error("No GIFs found!");
    }
    
    const randomIndex = Math.floor(Math.random() * data.data.length);
    const randomGif = data.data[randomIndex];
    
    const gifUrl = randomGif.images.original.url;
    
    console.log("Random GIF fetched successfully!");
    console.log("Title:", randomGif.title);
    console.log("GIF URL:", gifUrl);
    
    
    console.log("\nHTML that would be created in a browser:");
    console.log(`<img src="${gifUrl}" alt="${randomGif.title}" width="300">`);
    
    return gifUrl;
  } catch (error) {
    console.error("Error fetching random GIF:", error);
  }
}


fetchRandomGif();