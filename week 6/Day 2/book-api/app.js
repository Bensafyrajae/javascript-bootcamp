const express = require('express');
const app = express();
const bookRoutes = require('./server/routes/bookRoutes');

app.use(express.json());
app.use('/api/books', bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
