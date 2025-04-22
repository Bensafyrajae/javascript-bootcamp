const socket = io();

document.getElementById("join-btn").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const room = document.getElementById("room").value;

  if (username && room) {
    // Hide login and show chat container
    document.getElementById("login-container").style.display = "none";
    document.getElementById("chat-container").style.display = "flex";

    // Join the chat room
    socket.emit("joinRoom", username, room);
  }
});

// Listen for incoming messages
socket.on("message", (message) => {
  const messageList = document.getElementById("message-list");
  const li = document.createElement("li");
  li.textContent = message;
  messageList.appendChild(li);
});

// Listen for active users
socket.on("activeUsers", (users) => {
  const userList = document.getElementById("users");
  userList.innerHTML = ""; // Clear the list

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.username;
    userList.appendChild(li);
  });
});

// Send message
document.getElementById("send-message").addEventListener("click", () => {
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;
  if (message) {
    socket.emit("sendMessage", message);
    messageInput.value = ""; // Clear input
  }
});
