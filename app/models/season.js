const mongoose = require("mongoose");

const SeasonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Season = mongoose.model("Season", SeasonSchema);

module.exports.addSeason = (newSeason) => newSeason.save();

module.exports = Season;
