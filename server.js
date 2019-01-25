'use-strict';
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();
const database = {};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
}); 
