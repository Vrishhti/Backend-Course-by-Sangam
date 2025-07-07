const mongoose = require('mongoose');
const author = require('./author');

const BookSchema = new mongoose.Schema({
    title:String,
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Author'
    }
})

module.exports = mongoose.model('Book', BookSchema)