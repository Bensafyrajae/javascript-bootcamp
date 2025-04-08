// Exercise 1:


const apiUrl = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data received from Giphy API:");
    console.log(data);
    
    console.log(`Total number of gifs found: ${data.pagination.total_count}`);
    console.log(`Number of gifs returned: ${data.data.length}`);
    
    if (data.data.length > 0) {
      console.log("URL of first gif:", data.data[0].images.original.url);
    }
  })
  .catch(error => {
    console.error("Error fetching data from Giphy API:", error);
  });