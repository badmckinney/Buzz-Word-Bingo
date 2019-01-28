const express = require('express');
const router = express.Router();
const database = require('../database.js');

// Gets the current list of Buzz Words
router.get("/", (req, res) => {
  let buzzWords = database.getBuzzWords();
  res.status(200);
  res.json(buzzWords);
});

// Adds a new Buzz Word
router.post("/", (req, res) => {
  let body = req.body;
  let buzzWords = database.getBuzzWords();

  if (!isNaN(parseInt(body.buzzWord)) || isNaN(parseInt(body.points))) {
    res.status(500);
    return res.json({ "Error": "Please provide a valid word with valid points" });
  };

  if (buzzWords.buzzWords.length > 4) {
    res.status(500);
    return res.json({ "Error": "You already have 5 Buzz Words which is the maximum" });
  }

  database.addBuzzWord(body.buzzword, parseInt(body.points));
  res.status(200);
  res.json({ "success": true });
});

// Updates an existing Buzz Word
router.put("/", (req, res) => {
  let body = req.body;
  let index = database.findBuzzWord(body.buzzword);

  if (index < 0) {
    res.status(500);
    return res.json({ "Error": "Buzz Word does not exist" });
  }

  database.updateBuzzWord(index, parseInt(body.points));
  res.status(200);
  res.json({ "success": true });
});

// Deletes an existing Buzz Word
router.delete("/", (req, res) => {
  let body = req.body;
  let index = database.findBuzzWord(body.buzzword);

  if (index < 0) {
    res.status(500);
    return res.json({ "Error": "Buzz Word does not exist" })
  }

  database.removeBuzzWord(index);
  res.status(200);
  return res.json({ "success": true });
});

module.exports = router;