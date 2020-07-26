const router = require('express').Router();
const Book = require('../models/book.model');

router.get('/', async (req, res) => {
    const books = await Book.find()
    res.json(books)
});

router.post('/add', async (req, res) => {
    const newBook = new Book({
        //_id: req.body._id,
        Publisher: req.body.Publisher,
        Writer: req.body.Writer,
        Name: req.body.Name,
        Amount: req.body.Amount,
        Price: req.body.Price,
        Value: req.body.Value
    })

    try {
        const a = await newBook.save()
        res.json(a)
    } catch (e) {
        res.send(`Error: ${e}`)
    }
});

module.exports = router;