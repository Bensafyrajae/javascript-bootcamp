const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos');
const logger = require('./middleware/logger');

app.use(express.json());
app.use(logger); // Apply middleware to all routes

app.use('/todos', todosRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
