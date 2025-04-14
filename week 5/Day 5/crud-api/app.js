const express = require("express")
const dataService = require("./data/dataService")

const app = express()
const PORT = 5000

app.use(express.json())

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await dataService.fetchPosts()
    console.log("Data successfully retrieved and sent as response")
    res.json(posts)
  } catch (error) {
    console.error("Error in /api/posts endpoint:", error.message)
    res.status(500).json({ message: "Error fetching posts from external API" })
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
