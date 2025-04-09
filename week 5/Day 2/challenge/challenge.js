document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("locationForm")
    const loadingElement = document.getElementById("loading")
    const resultsContent = document.getElementById("resultsContent")
    const errorElement = document.getElementById("error")
    const sunrise1Element = document.getElementById("sunrise1")
    const sunrise2Element = document.getElementById("sunrise2")
    const timeDifferenceElement = document.getElementById("timeDifference")
  
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      loadingElement.classList.remove("hidden")
      resultsContent.classList.add("hidden")
      errorElement.classList.add("hidden")
  
      const lat1 = document.getElementById("lat1").value
      const lng1 = document.getElementById("lng1").value
      const lat2 = document.getElementById("lat2").value
      const lng2 = document.getElementById("lng2").value
  
      const url1 = `https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}&formatted=0`
      const url2 = `https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}&formatted=0`
  
      const promise1 = fetch(url1).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
  
      const promise2 = fetch(url2).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
  
      Promise.all([promise1, promise2])
        .then(([data1, data2]) => {
          loadingElement.classList.add("hidden")
          resultsContent.classList.remove("hidden")
  
          const sunrise1 = new Date(data1.results.sunrise)
          const sunrise2 = new Date(data2.results.sunrise)
  
          sunrise1Element.textContent = formatTime(sunrise1)
          sunrise2Element.textContent = formatTime(sunrise2)
  
          const timeDiff = calculateTimeDifference(sunrise1, sunrise2)
          timeDifferenceElement.textContent = `Time difference: ${timeDiff}`
        })
        .catch((error) => {
          loadingElement.classList.add("hidden")
          errorElement.classList.remove("hidden")
          console.error("Error fetching data:", error)
        })
    })
  
    
    function formatTime(date) {
      const hours = date.getHours().toString().padStart(2, "0")
      const minutes = date.getMinutes().toString().padStart(2, "0")
      const seconds = date.getSeconds().toString().padStart(2, "0")
      return `${hours}:${minutes}:${seconds}`
    }
  
    function calculateTimeDifference(date1, date2) {
      const diffMs = Math.abs(date1 - date2)
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
      const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000)
  
      return `${diffHours}h ${diffMinutes}m ${diffSeconds}s`
    }
  })
  