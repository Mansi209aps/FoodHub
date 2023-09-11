const express = require("express");
const auth = require("../Middleware/Auth");
const { check } = require("express-validator");
const Login = require("../Controller/Login")
const router = express.Router();

router.post(
    "/",
    [check("email", "email is Required").not().isEmpty().isEmail()],
    [check("password", "Password is Required").not().isEmpty()],
    Login.login
);

router.use(auth);

module.exports = router;