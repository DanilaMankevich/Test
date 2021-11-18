const mongoose = require('mongoose')
const config = require('../config/db')

const MatchSchema = mongoose.Schema({
    homeTeamName: {
        type: String,
        required: true
    },
    awayTeamName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    scoreHomeTeam: {
        type: Number
    },
    scoreAwayTeam: {
        type: Number
    },
    competitionId: {
        type: String,
        required: true
    },
    seasonId: {
        type: String,
        required: true
    }
})

const Match = module.exports = mongoose.model('Match', MatchSchema)

module.exports.getMatchByName = (name) => {
    const query = {name: name}
    Match.findOne(query)
}

module.exports.getMatchById = (id) => {
    Match.findOne(id)
}

module.exports.addMatch = (newMatch) => {
    newMatch.save()
}