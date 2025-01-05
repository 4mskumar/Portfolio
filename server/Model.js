const mongoose = require('mongoose');
const model = new mongoose.Schema({
    name:String,
    msg: String,
    url: String,
})

const comment = mongoose.model('comment', model)
module.exports = comment