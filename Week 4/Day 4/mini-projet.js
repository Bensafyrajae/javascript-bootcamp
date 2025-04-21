const quotes = [
    { id: 0, quote: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison", likes: 0 },
    { id: 1, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon", likes: 0 },
    { id: 2, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs", likes: 0 }
  ];
  
  let lastIndex = -1;
  let currentQuote = null;
  let filteredQuotes = [];
  let currentFilteredIndex = 0;
  
  function displayQuote(q) {
    document.getElementById('quote-text').textContent = q.quote;
    document.getElementById('quote-author').textContent = q.author;
    document.getElementById('like-count').textContent = `❤️ Likes: ${q.likes}`;
    document.getElementById('quote-counter').textContent = `Quote #${q.id + 1}/${quotes.length}`;
    currentQuote = q;
  }
  
  function generateQuote() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;
    displayQuote(quotes[randomIndex]);
  }
  
  function countCharacters(includeSpaces = true) {
    if (!currentQuote) return;
    const text = currentQuote.quote;
    const count = includeSpaces ? text.length : text.replace(/\s/g, '').length;
    alert(`Character count (${includeSpaces ? "with" : "without"} spaces): ${count}`);
  }
  
  function countWords() {
    if (!currentQuote) return;
    const wordCount = currentQuote.quote.trim().split(/\s+/).length;
    alert(`Word count: ${wordCount}`);
  }
  
  function likeQuote() {
    if (!currentQuote) return;
    currentQuote.likes++;
    displayQuote(currentQuote);
  }
  
  function addQuote() {
    const text = document.getElementById('new-quote').value.trim();
    const author = document.getElementById('new-author').value.trim();
    if (text && author) {
      quotes.push({
        id: quotes.length,
        quote: text,
        author: author,
        likes: 0
      });
      alert("Quote added successfully!");
      document.getElementById('new-quote').value = "";
      document.getElementById('new-author').value = "";
    } else {
      alert("Please enter both quote and author.");
    }
  }
  
  function filterByAuthor() {
    const authorInput = document.getElementById('search-author').value.trim().toLowerCase();
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === authorInput);
    if (filteredQuotes.length > 0) {
      currentFilteredIndex = 0;
      displayQuote(filteredQuotes[currentFilteredIndex]);
    } else {
      alert("No quotes found for that author.");
    }
  }
  
  function prevFiltered() {
    if (filteredQuotes.length && currentFilteredIndex > 0) {
      currentFilteredIndex--;
      displayQuote(filteredQuotes[currentFilteredIndex]);
    }
  }
  
  function nextFiltered() {
    if (filteredQuotes.length && currentFilteredIndex < filteredQuotes.length - 1) {
      currentFilteredIndex++;
      displayQuote(filteredQuotes[currentFilteredIndex]);
    }
  }
  