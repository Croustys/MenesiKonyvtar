const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5001;

const path = require('path');

app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI || 'mongodb://heroku_nnfdvdmk:heroku_nnfdvdmk@ds251284.mlab.com:51284/heroku_nnfdvdmk'
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

//if (process.env.NODE_ENV === "production") {

app.use(express.static('build'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})
//}

//app.set("port", port)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});