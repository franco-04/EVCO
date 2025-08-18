const express = require('express');
const app = express();

// BD
const db = require('./db');
const COUNTER_DOC = db.collection('metrics').doc('hits');

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Node.js CI/CD on Cloud Run' });
});

app.get('/health', (_req, res) => res.status(200).send('ok'));


app.get('/hits', async (_req, res) => {
  try {
    await db.runTransaction(async (t) => {
      const snap = await t.get(COUNTER_DOC);
      const current = (snap.exists && snap.data().count) ? snap.data().count : 0;
      t.set(COUNTER_DOC, { count: current + 1, updatedAt: new Date().toISOString() });
    });

    const fresh = await COUNTER_DOC.get();
    res.json({ count: fresh.data().count });
  } catch (err) {
    console.error('Error /hits:', err);
    res.status(503).json({ error: 'db_unavailable' });
  }
});


app.get('/hits/value', async (_req, res) => {
  try {
    const snap = await COUNTER_DOC.get();
    const count = (snap.exists && snap.data().count) ? snap.data().count : 0;
    res.json({ count });
  } catch (err) {
    console.error('Error /hits/value:', err);
    res.status(503).json({ error: 'db_unavailable' });
  }
});

module.exports = app;
