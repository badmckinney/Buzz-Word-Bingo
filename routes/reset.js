const express = require('express');
const router = express.Router();
const database = require('../database.js');

// Resets the database
router.post("/", (req, res) => {
  let body = req.body;

  if (!body.reset) {
    res.status(500);
    return res.json({ "success": false });
  }

  database.resetAll();
  res.status(200);
  res.json({ "success": true });
});

module.exports = router;