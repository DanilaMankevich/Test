const express = require("express");
const Competition = require("../models/competition");
const router = express.Router();

router.get("/", async (req, res) => {
  await Competition.find({}).exec((err, competitions) => {
    if (err) {
      res.status(500).json(err + "error retrieving competitions");
    } else {
      res.status(200).json(competitions);
    }
  });
});

router.post("/competition", async (req, res) => {
  const newCompetition = new Competition({
    name: req.body.competitionName,
  });
  try {
    const competition = await Competition.addCompetition(newCompetition);
    res
      .status(201)
      .json({ success: true, msg: "Competition added", id: competition.id });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

module.exports = router;
