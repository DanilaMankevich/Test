const mongoose = require("mongoose");

const CompetitionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Competition = mongoose.model('Competition', CompetitionSchema)

module.exports = Competition;

module.exports.addCompetition = (newCompetition) => newCompetition.save();
