const express = require('express')

const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User')

router.post('/signup', body('email', 'Invalid Email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 }), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})
router.post('/login',
    body('email', 'Invalid Email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 }),
    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let email = req.body.email
        try {
            let userData = await User.findOne({ email });
            if (!userData) {
                return res.status(400).json({ errors: "Try Logging with correct credentials" });
            }

            if (req.body.password !== userData.password) {
                return res.status(400).json({ errors: "Try Logging with correct credentials" });
            }

            return res.json({ success: true })
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router