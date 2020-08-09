const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

//const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
//app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));

const uri = process.env.MONGOLAB_MAROON_URI || 'mongodb+srv://dbCroAdmin:dbCroAdmin@cluster0.meemo.mongodb.net/<dbname>?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const bookRouter = require('./routes/book');
const userRouter = require('./routes/user');
const idRouter = require('./routes/id');

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/ids', idRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});