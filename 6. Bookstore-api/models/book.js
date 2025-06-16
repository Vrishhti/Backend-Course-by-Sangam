const mongoose = require('mongoose');

const BookSchema = new  mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Book title is required'],
        trim: true,
        maxLength: [100, "Book title can't be longer than 100 characters"]
    },
    author:{
        type: String,
        required:[true, 'Author is required'],
        trim: true,
    },
    year:{
        type: Number,
        required:[true, 'Year is required'],
        min: [2000, 'year must be atleast 2000'],
        max: [new Date().getFullYear(), "Year can't be in the future"] 
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

//'Book' – Model name
// This is the name of the model you want to create.

module.exports= mongoose.model('Book', BookSchema)
