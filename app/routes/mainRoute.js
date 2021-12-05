const express = require("express");
const router = express.Router();
const Match = require("../models/match");

router.get("/", async (req, res) => {
  const competition = req.query.competitionId;
  const season = req.query.seasonId;
  await Match.find({ competitionId: competition, seasonId: season }).exec(
    (err, matches) => {
      if (err) {
        res.status(500).json(err + "error");
      } else {
        res
          .status(200)
          .send(
            matches.sort(
              (firstDate, secondDate) =>
                new Date(secondDate.date).getTime() -
                new Date(firstDate.date).getTime()
            )
          );
      }
    }
  );
});

module.exports = router;
