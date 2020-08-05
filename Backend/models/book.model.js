const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const Schema = mongoose.Schema;

const bookSchem = new Schema({
    _id: {
        type: Number
    },
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