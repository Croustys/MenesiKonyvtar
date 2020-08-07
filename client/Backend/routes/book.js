const router = require('express').Router();
const Book = require('../models/book.model');

//GET ALL
router.get('/', async (req, res) => {
    const books = await Book.find({})
    res.json(books)
});

//Get ONE
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params
    const book = await Book.findOne({
        _id: id,
    }, (err) => {
        if (err) res.json('Cannot find Book by such id!')
    })
    res.json(book)
})

//POST ONE
router.post('/add', async (req, res) => {
    const {
        _id,
        Publisher,
        Writer,
        Name,
        Amount,
        Price,
        Value
    } = req.body;

    const newBook = new Book({
        _id,
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

//UPDATE
router.put('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        const {
            Publisher,
            Writer,
            Name,
            Amount,
            Price,
            Value
        } = req.body;
        const item = Book.findOne({
            _id: id,
        })
        if (!item) return next();

        const updated = await Book.updateOne({
            _id: id
        }, {
            Publisher,
            Writer,
            Name,
            Amount,
            Price,
            Value
        })
        res.json({
            Publisher,
            Writer,
            Name,
            Amount,
            Price,
            Value
        })
    } catch (error) {
        next(error);
    }
})

//DELETE
router.delete('/:id', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        await Book.deleteOne({
            _id: id
        })
        res.json({
            message: `id: ${id} deleted successfully`
        })
    } catch (error) {
        next(error);
    }
})

module.exports = router;