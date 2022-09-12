const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const merchSchema = new Schema({
    name: String,
    img: String,
    price: Number,
    qty: Number,
})

const Merch = mongoose.model('Merch', merchSchema);

module.exports = Merch