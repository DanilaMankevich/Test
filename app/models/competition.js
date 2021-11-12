const mongoose = require('mongoose')
const config = require('../config/db')

const CompetitionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Competition = module.exports = mongoose.model('Competition', CompetitionSchema)

module.exports.getCompetitionByName = function(name, callback){
    const query = {name: name}
    Competition.findOne(query, callback)
}

module.exports.getCompetitionById = function(id, callback){
    Competition.findOne(id, callback)
}

module.exports.addCompetitionToMongo = function(newCompetition, callback){
    newCompetition.save(callback)
}