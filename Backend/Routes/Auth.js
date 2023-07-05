const express = require('express')

const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/signup', body('email', 'Invalid Email').isEmail(), body('password', 'Incorrect Password').isLength({ min: 5 }), async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword
        }).then(
            res.json({ success: true }));
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

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

            if (!pwdCompare) {
                return res.status(400).json({ errors: "Try Logging with correct credentials" });
            }

            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY)
            return res.json({ success: true, authToken: authToken })
        } catch (error) {
            console.log(error);
            res.json({ success: false });
        }
    })

module.exports = router