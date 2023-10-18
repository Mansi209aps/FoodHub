const express = require("express");
const HttpError = require("../models/HttpError");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Model
const User = require("../models/User");

// Login
const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    var validateEmail;
    try {
        validateEmail = await User.findOne({ email });

        // console.log(validateEmail);

        if (!validateEmail) {
            const error = new HttpError("Wrong credentials", 400);
            return next(error);
        }

        // const isMatch = await bcrypt.compare(password, validateEmail.password);

        // if (!isMatch) {
        //   const error = new HttpError("Wrong credentials", 400);
        //   return next(error);
        // }

        // const pwdCompare = await bcrypt.compare(req.body.password, userData.password)

        // if (!pwdCompare) {
        //     return res.status(400).json({ errors: "Try Logging with correct credentials" });
        // }

        // console.log("saveds :- " + validateEmail.password);
        let token;
        try {
            token = jwt.sign(
                {
                    userEmail: validateEmail.email,
                },
                process.env.JWT_SECRATE,
                { expiresIn: "3hr" }
            );
        } catch (err) {
            const error = new HttpError("Error error generating token", 401);
            console.log(err);
            return next(error);
        }

        res.status(200).json({ success: true, token: token, user: validateEmail });
    } catch (e) {
        const error = new HttpError("User not found", 500);
        return next(error);
    }
};

exports.login = login;
