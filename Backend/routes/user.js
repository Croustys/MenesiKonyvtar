const router = require('express').Router();
const User = require('../models/user.model');
require('dotenv').config();

router.get('/login', async (req, res) => {
    const users = await User.find()
    res.json(users)
})

/*
router.post('/register', async (req, res) => {
    const {
        name,
        email,
        password,
        password2
    } = req.body
    if (!name || !email || !password || password !== password2) {
        return res.status(400).json({
            msg: 'Please enter valid data to all fields!'
        })
    }
    User.findOne({
            email
        })
        .then(user => {
            if (user) return res.status(400).json({
                msg: 'User already exists'
            })
            const newUser = new User({
                name,
                email,
                password
            })

            bcrypt.genSalt(10, (error, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign({
                                    id: user.id
                                },
                                process.env.jwtSecret, {
                                    expiresIn: 3600
                                },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        user: {
                                            token,
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })
});
*/
module.exports = router;