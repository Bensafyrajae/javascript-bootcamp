const express = require('express');
const app = express();
const userRoutes = require('./server/routes/userRoutes');

app.use(express.json());
app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
