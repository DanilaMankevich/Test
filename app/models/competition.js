const mongoose = require('mongoose')
const config = require('../config/db')

const CompetitionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Competition = module.exports = mongoose.model('Competition', CompetitionSchema)

module.exports.getCompetitionByName = (name) => {
    const query = {name: name}
    Competition.findOne(query)
}

module.exports.getCompetitionById = (id) => {
    Competition.findOne(id)
}

module.exports.addCompetitionToMongo = (newCompetition) => {
    newCompetition.save()
}