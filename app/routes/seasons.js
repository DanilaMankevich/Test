const express = require("express");
const Season = require("../models/season");
const router = express.Router();

router.get("/", async (req, res) => {
  await Season.find({}).exec((err, seasons) => {
    if (err) {
      res.status(500).json(err + "error retrieving seasons");
    } else {
      res.status(200).json(seasons);
    }
  });
});

router.post("/season", async (req, res) => {
  const newSeason = new Season({
    name: req.body.seasonName,
  });
  try {
    const season = await Season.addSeason(newSeason);
    res.status(201).json({ success: true, msg: "Season added", id: season.id });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

module.exports = router;
