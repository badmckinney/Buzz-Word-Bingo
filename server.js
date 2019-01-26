'use-strict';
const express = require('express');
const bodyParser = require('body-parser');

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

app.get("/", (req, res) => {
  res.render('./public/html');
});

app.get("/buzzwords", (req, res) => {
  res.status(200);
  res.send(database);
});

app.post("/buzzwords", (req, res) => {
  let body = req.body;

  if (!isNaN(parseInt(body.buzzWord)) || isNaN(parseInt(body.points))) {
    res.status(500);
    return res.send(`{ "Error": "Please provide a valid word with valid points" }`);
  };

  let newBuzzWord = {};
  newBuzzWord.buzzWord = body.buzzWord;
  newBuzzWord.points = parseInt(body.points);
  database.buzzWords.push(newBuzzWord);
  res.status(200);
  res.send(`{ "success": true }`);
});

app.put("/buzzwords", (req, res) => {
  let body = req.body;
  let index = -1;


  database.buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === body.buzzword) {
      return index = database.buzzWords.indexOf(buzzWord);
    }
  });

  if (index < 0) {
    res.status(500);
    return res.send(`{ "Error": "Buzz Word does not exist"}`);
  }

  database.buzzWords[index].points = parseInt(body.points);
  res.status(200);
  res.send(`{ "success": true }`);
});

app.delete("/buzzwords", (req, res) => {

});

app.post("/reset", (req, res) => {
  let body = req.body;

  if (!body.reset) {
    res.status(500);
    res.send(`{ "success" : false }`);
  }

  database.buzzWords = [];
  console.log(database);
  res.status(200);
  res.send(`{ "success" : true }`);
});

app.post("/heard", (req, res) => {
  let body = req.body;
  let index = -1;

  database.buzzWords.forEach(buzzWord => {
    if (buzzWord.buzzWord === body.buzzword) {
      return index = database.buzzWords.indexOf(buzzWord);
    }
  });

  if (index < 0) {
    res.status(500);
    return res.send(`{ "Error": "Buzz Word does not exist"}`);
  }

  database.totalScore += database.buzzWords[index].points;
  res.status(200);
  res.send(`{ "totalScore" : ${database.totalScore} }`);
});

const server = app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
}); 
