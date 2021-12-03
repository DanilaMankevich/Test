const Match = require("../models/match");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  await Match.find({}).exec((err, matches) => {
    if (err) {
      res.status(500).json(err + "error retrieving matches");
    } else {
      res
        .status(200)
        .json(
          matches.sort(
            (firstDate, secondDate) =>
              new Date(secondDate.date).getTime() -
              new Date(firstDate.date).getTime()
          )
        );
    }
  });
});

router.post("/match", async (req, res) => {
  const newMatch = new Match({ ...req.body });
  try {
    const match = await Match.addMatch(newMatch);
    res.status(201).json({ success: true, msg: "Match added", id: match.id });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

module.exports = router;
