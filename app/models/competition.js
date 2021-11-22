const mongoose = require('mongoose')
const config = require('../config/db')

const CompetitionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Competition = (module.exports = mongoose.model(
    'Competition',
    CompetitionSchema
));

module.exports.getCompetitionByName = (name) => Competition.findOne({name});

module.exports.getCompetitionById = (id) => Competition.findOne(id);

module.exports.addCompetition = (newCompetition) => newCompetition.save();
