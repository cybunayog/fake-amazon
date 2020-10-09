const express = require('express');
const dbConnect = require('./dbConnect.js');

// Connect to the DB 
dbConnect.connect();

const app = express();

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.listen(3000, () => {
  console.log('Server is live!');
});