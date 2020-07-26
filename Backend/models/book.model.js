const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchem = new Schema({
    Publisher: {
        type: String
    },
    Writer: {
        Type: String
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