const express = require('express');
const app = express();
const postRoutes = require('./server/routes/postRoutes');

app.use(express.json());
app.use('/posts', postRoutes);

// Gestion d'erreurs
app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée' });
});

app.listen(3000, () => {
  console.log('Serveur Express lancé sur le port 3000');
});
