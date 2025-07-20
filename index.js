// index.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('✅ Vercel Express API is working!');
});

module.exports = serverless(app);
