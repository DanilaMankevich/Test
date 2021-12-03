const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({
  homeTeamName: {
    type: String,
    required: true,
  },
  awayTeamName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  scoreHomeTeam: {
    type: Number,
  },
  scoreAwayTeam: {
    type: Number,
  },
  competitionId: {
    type: String,
    required: true,
  },
  seasonId: {
    type: String,
    required: true,
  },
});

const Match = mongoose.model('Match', MatchSchema)

module.exports = Match;

module.exports.addMatch = (newMatch) => newMatch.save();
