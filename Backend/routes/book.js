const router = require('express').Router();
const Book = require('../models/book.model');

router.get('/', async (req, res) => {
    const books = await Book.find()
    res.json(books)
});

//Get ONE Specific
router.get('/:id', async (req, res) => {
    const book = await Book.findOne({
        _id: req.params.id
    }, (err) => {
        if (err) res.json('Cannot find Book by such id!')
    })
    res.json(book)
})

router.post('/add', async (req, res) => {
    const {
        Publisher,
        Writer,
        Name,
        Amount,
        Price,
        Value
    } = req.body;

    const newBook = new Book({
        Publisher,
        Writer,
        Name,
        Amount,
        Price,
        Value
    })

    try {
        const a = await newBook.save()
        res.json(a)
    } catch (e) {
        res.send(`Error: ${e}`)
    }
});

module.exports = router;