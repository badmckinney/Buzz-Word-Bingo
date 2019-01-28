'use-strict';
const express = require('express');
const bodyParser = require('body-parser');
const buzzWordRoutes = require('./routes/buzzwords.js');
const resetRoutes = require('./routes/reset.js');
const heardRoutes = require('./routes/heard.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/buzzwords', buzzWordRoutes);
app.use('/reset', resetRoutes);
app.use('/heard', heardRoutes);


const server = app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
}); 
