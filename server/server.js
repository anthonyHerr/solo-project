const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


app.use('/bundle.js', express.static(path.join(__dirname, '../build/bundle.js')));


app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});



app.listen(3000, () => console.log('Listening on port 3000')); 