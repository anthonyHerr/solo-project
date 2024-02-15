const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/bundle.js', express.static(path.join(__dirname, '../build/bundle.js')));


app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('Listening on port 3000')); 