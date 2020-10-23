const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./dbConnect.js');

// Connect to the DB 
dbConnect.connect();

const app = express();
app.use(bodyParser.json());
app.use(require('./session.js'));
app.use(require('./routes/functional.js'));

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

app.use((req, res) => {
  res.status(404);

  if (req.accepts('json')) {
    res.json('Page not found');
    return;
  }

  res.type('txt').send('Page not found');
});

app.listen(3000, () => {
  console.log('Server is live!');
});