const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Node.js CI/CD on Cloud Run' });
});

app.get('/health', (_req, res) => res.status(200).send('ok'));

module.exports = app;
