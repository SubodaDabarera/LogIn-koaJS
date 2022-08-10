const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url)

client.connect( () => {
    console.log('MongoDB connected')
})

module.exports = client;
