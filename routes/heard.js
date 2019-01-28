const express = require('express');
const router = express.Router();
const database = require('../database.js');

// Updates Score
router.post("/", (req, res) => {
  let body = req.body;
  let index = database.findBuzzWord(body.buzzword);

  if (index < 0) {
    res.status(500);
    return res.send({ "Error": "Buzz Word does not exist" });
  }

  database.updateScore(index);
  let totalScore = database.getScore();
  res.status(200);
  res.json({ "Total Score": `${totalScore}` });
});

module.exports = router;