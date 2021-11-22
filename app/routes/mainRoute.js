const express = require("express");
const router = express.Router();
const Competition = require("../models/competition");
const Match = require("../models/match");
const Season = require("../models/season");
const config = require("../config/db");
const mongoose = require("mongoose");

router.post("/competition", async (req, res) => {
  let newCompetition = new Competition({
    name: req.body.competitionName,
  });
  try {
    const competition = await Competition.addCompetition(newCompetition);
    res.json({ success: true, msg: "Competition added", id: competition.id });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});

router.post("/match", async (req, res) => {
  let newMatch = new Match({ ...req.body });
  try {
    const match = await Match.addMatch(newMatch);
    res.json({ success: true, msg: "Match added", id: match.id });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});

router.post("/season", async (req, res) => {
  let newSeason = new Season({
    name: req.body.seasonName,
  });
  try {
    const season = await Season.addSeason(newSeason);
    res.json({ success: true, msg: "Season added", id: season.id });
  } catch (err) {
    res.json({ success: false, msg: err.message });
  }
});
//competitions
router.get("/competitions", async (req, res) => {
  await Competition.find({}).exec((err, competitions) => {
    if (err) {
      console.log(err + "error retrieving competitions");
    } else {
      res.json(competitions);
    }
  });
});

router.get("/competitions/:id", async (req, res) => {
  await Competition.findById(req.params.id).exec((err, competition) => {
    if (err) {
      console.log(err + "error retrieving competition");
    } else {
      res.json(competition);
    }
  });
});

//seasons

router.get("/seasons", async (req, res) => {
  await Season.find({}).exec((err, seasons) => {
    if (err) {
      console.log(err + "error retrieving seasons");
    } else {
      res.json(seasons);
    }
  });
});

router.get("/seasons/:id", async (req, res) => {
  await Season.findById(req.params.id).exec((err, season) => {
    if (err) {
      console.log(err + "error retrieving season");
    } else {
      res.json(season);
    }
  });
});

//matches

router.get("/matches", async (req, res) => {
  await Match.find({}).exec((err, matches) => {
    if (err) {
      console.log(err + "error retrieving matches");
    } else {
      res.json(
        matches.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      );
    }
  });
});

router.get("/matches/:id", async (req, res) => {
  await Match.findById(req.params.id).exec((err, match) => {
    if (err) {
      console.log(err + "error retrieving match");
    } else {
      res.json(match);
    }
  });
});

router.get("/", async (req, res) => {
  let a = req.query.competitionId;
  let b = req.query.seasonId;
  console.log(a, b);

  await Match.find({ competitionId: a, seasonId: b }).exec((err, matches) => {
    if (err) {
      console.log(err + "error retrieving competition");
    } else {
      res.send(matches);
    }
  });
});

module.exports = router;
