// Exercise 2: 
const apiUrl = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data received from Giphy API for 'sun' search:");
    console.log(data);
    
    console.log(`Total number of sun gifs found: ${data.pagination.total_count}`);
    console.log(`Number of gifs returned: ${data.data.length}`);
    console.log(`Starting position (offset): ${data.pagination.offset}`);
    
    console.log("\nURLs of returned gifs:");
    data.data.forEach((gif, index) => {
      console.log(`${index + 1}. ${gif.title}: ${gif.images.original.url}`);
    });
  })
  .catch(error => {
    console.error("Error fetching data from Giphy API:", error);
  });