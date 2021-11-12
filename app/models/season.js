const mongoose = require('mongoose')
const config = require('../config/db')

const SeasonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Season = module.exports = mongoose.model('Season', SeasonSchema)

module.exports.getSeasonByName = (name, callback) => {
    const query = { name: name }
    Season.findOne(query, callback)
}

module.exports.getSeasonById = (id, callback) => {
    Season.findOne(id, callback)
}

module.exports.addSeason = (newSeason, callback) => {
    newSeason.save(callback)
}