const mongoose = require('mongoose');
//const { ObjectId } = require('mongodb');
//For later times in case we'd like to change ids to MONGODB objectIds

const Schema = mongoose.Schema;

const bookSchem = new Schema({
    _id: {
        type: Number
    },
    /* _id: {
        type: ObjectId
    }, */
    Publisher: {
        type: String
    },
    Writer: {
        type: String
    },
    Name: {
        type: String
    },
    Amount: {
        type: Number
    },
    Price: {
        type: Number
    },
    Value: {
        type: Number
    }
});

const Book = mongoose.model('Book', bookSchem);

module.exports = Book;