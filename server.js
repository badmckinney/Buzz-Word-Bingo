'use-strict';
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/routes.js');

const PORT = process.env.PORT || 3000;
const app = express();
const database = {
  "buzzWords": [{
    "buzzWord": "daffodil",
    "points": 30
  }],
  "totalScore": 0
};

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/routes/router', router);

const server = app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
}); 
