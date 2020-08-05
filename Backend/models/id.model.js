const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const idSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    }
});

const Id = mongoose.model('Id', idSchema);

module.exports = Id;