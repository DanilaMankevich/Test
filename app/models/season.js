const mongoose = require("mongoose");

const SeasonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Season = mongoose.model("Season", SeasonSchema);

module.exports = Season;

module.exports.addSeason = (newSeason) => newSeason.save();
