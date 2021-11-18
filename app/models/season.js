const mongoose = require('mongoose')
const config = require('../config/db')

const SeasonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Season = module.exports = mongoose.model('Season', SeasonSchema)

module.exports.getSeasonByName = (name) => {
    const query = {name: name}
    Season.findOne(query)
}

module.exports.getSeasonById = (id) => {
    Season.findOne(id)
}

module.exports.addSeason = (newSeason) => {
    newSeason.save()
}