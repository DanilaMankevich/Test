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

module.exports.getMatchByName = (name, callback)=>{
    const query = {name: name}
    Match.findOne(query, callback)
}

module.exports.getMatchById = (id, callback)=>{
    Match.findOne(id, callback)
}

module.exports.addMatch = (newMatch, callback)=>{
    newMatch.save(callback)
}