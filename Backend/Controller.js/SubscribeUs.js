const express = require('express');
const { validationResult } = require('express-validator');
const HttpError = require('../models/HttpError');
const { sendMail } = require('../Routes/Email');

// Modal
const Subscribe = require('../models/Subscribe');

const Subscriber = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email } = req.body;
    console.log(email);
    try {
        const newSubscriber = new Subscribe({ email });
        await newSubscriber.save();
        console.log("email saved")
        // Send the email with the token
        const emailData = {
            to: email,
            subject: 'Your Token',
            text: `Your token ID: `,
        };

        const result = await sendMail(emailData);
        res.status(200).json({ success: true });

    } catch (err) {
        console.log(err);
        const error = new HttpError("Cannot send mail", 500);
        return next(error);
    }
}

exports.Subscriber = Subscriber;