const router = require('express').Router();
const Id = require('../models/id.model');

router.get('/', async (req, res) => {
    const ids = await Id.find()
    res.json(ids)
})

router.post('/add/:id', async (req, res) => {

    const {
        id
    } = req.params
    const newId = new Id({id})

    try {
        const savedId = await newId.save()
        res.json(savedId)
    } catch (e) {
        res.send(`Error: ${e}`)
    }
})

module.exports = router