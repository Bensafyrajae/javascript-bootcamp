const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Utiliser les routes pour /tasks
app.use('/tasks', taskRoutes);

// Route de base
app.get('/', (req, res) => {
  res.send('Welcome to the Task Management API!');
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
