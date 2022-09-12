const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const gameSchema = new Schema({
    title: String,
    img: String,
    description: String,
    developer: String,
    genres: String,
    platforms: String,
    price: Number,
    qty: Number,
})

const Game = mongoose.model('Game', gameSchema);

module.exports = Game