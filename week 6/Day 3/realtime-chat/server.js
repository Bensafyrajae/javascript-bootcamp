const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);


app.use(express.static("public"));

let activeUsers = [];

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("joinRoom", (username, room) => {
    socket.username = username;
    socket.room = room;
    activeUsers.push({ username, room });
    socket.join(room);
    io.to(room).emit("message", `${username} has joined the chat`);

    
    io.to(room).emit("activeUsers", activeUsers.filter(user => user.room === room));
  });

  socket.on("sendMessage", (message) => {
    io.to(socket.room).emit("message", `${socket.username}: ${message}`);
  });

  
  socket.on("disconnect", () => {
    console.log(`${socket.username} disconnected`);
    activeUsers = activeUsers.filter(user => user.username !== socket.username);
    io.to(socket.room).emit("activeUsers", activeUsers.filter(user => user.room === socket.room));
  });
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
