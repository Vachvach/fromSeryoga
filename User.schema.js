const mongoose = require('mongoose')

const User = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    eMail: {type: String, required: true},
    books: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}
    ]
})

module.exports = mongoose.model('User', User)