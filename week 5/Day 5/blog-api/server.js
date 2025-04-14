const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

let data = [
  { id: 1, title: "First Blog Post", content: "This is the content of the first blog post." },
  { id: 2, title: "Second Blog Post", content: "This is the content of the second blog post." },
  { id: 3, title: "Third Blog Post", content: "This is the content of the third blog post." },
]


app.get("/posts", (req, res) => {
  res.json(data)
})

app.get("/posts/:id", (req, res) => {
  const id = Number.parseInt(req.params.id)
  const post = data.find((post) => post.id === id)

  if (!post) {
    return res.status(404).json({ message: "Post not found" })
  }

  res.json(post)
})

app.post("/posts", (req, res) => {
  const { title, content } = req.body

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" })
  }

  const newId = data.length > 0 ? Math.max(...data.map((post) => post.id)) + 1 : 1
  const newPost = { id: newId, title, content }

  data.push(newPost)
  res.status(201).json(newPost)
})

app.put("/posts/:id", (req, res) => {
  const id = Number.parseInt(req.params.id)
  const { title, content } = req.body
  const postIndex = data.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" })
  }

  if (!title && !content) {
    return res.status(400).json({ message: "Title or content is required for update" })
  }

  data[postIndex] = {
    ...data[postIndex],
    title: title || data[postIndex].title,
    content: content || data[postIndex].content,
  }

  res.json(data[postIndex])
})

app.delete("/posts/:id", (req, res) => {
  const id = Number.parseInt(req.params.id)
  const postIndex = data.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return res.status(404).json({ message: "Post not found" })
  }

  const deletedPost = data[postIndex]
  data = data.filter((post) => post.id !== id)

  res.json({ message: "Post deleted successfully", deletedPost })
})

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something went wrong!" })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
