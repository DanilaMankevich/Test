module.exports = {
    mongo_url: process.env.MONGO_URL || 'mongodb://localhost',
    mongo_port: process.env.MONGO_PORT || '27017',
    mongo_db: process.env.MONGO_db || 'website',
    port: process.env.PORT || 3000
}