const express = require("express");
const { check } = require("express-validator");
const SubscriberUs = require("../Controller/SubscribeUs");
// const auth = require("../../middleWare/auth");

const router = express.Router();

router.post(
    "/",
    [check("email", "email is required").not().isEmpty()],
    //   [check("answer", "answer is required").not().isEmpty()],
    SubscriberUs.Subscriber
);

module.exports = router;
