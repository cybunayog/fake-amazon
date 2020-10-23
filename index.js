const express = require('express');
const dbConnect = require('./dbConnect.js');

// Connect to the DB 
dbConnect.connect();

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.use((req, res) => {
  res.status(404);

  if (req.accepts('json')) {
    res.json('Page not found');
    return;
  }
});

app.listen(3000, () => {
  console.log('Server is live!');
});