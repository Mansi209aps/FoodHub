const express = require("express")
const { check } = require("express-validator");
const RegisterController = require("../Controller/Signup");
const auth = require("../Middleware/Auth");

const router = express.Router();

router.post(
    "/",
    [check("name", "User Name is Required").not().isEmpty()],
    [check("email", "Email is Required").not().isEmpty().isEmail()],
    [check("password", "Password is Required").not().isEmpty()],
    RegisterController.registerUser
);

router.use(auth);

module.exports = router;