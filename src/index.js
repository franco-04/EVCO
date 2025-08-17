const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Node.js CI/CD on Cloud Run' });
});

// Salud opcional para monitoreo
app.get('/health', (_req, res) => res.status(200).send('ok'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));

module.exports = app; // export para pruebas
