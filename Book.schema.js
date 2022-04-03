const mongoose = require('mongoose')

const Book = new mongoose.Schema({
    title: {type: String},
    author: {type: String},
    ownerId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Book', Book)