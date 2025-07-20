// index.js
const express = require('express');
const serverless = require('serverless-http');

const app = express();

app.get('/', (req, res) => {
  res.send('✅ Vercel Express API is working!');
});

PORT = 3000
app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));
//module.exports = serverless(app);
