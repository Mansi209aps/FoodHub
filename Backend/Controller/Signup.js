const Express = require("express");
const { validationResult } = require("express-validator");
const HttpError = require("../models/HttpError");

// models
const User = require("../models/User");

const bcrypt = require("bcrypt");

const registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        name,
        email,
        password
    } = req.body;

    //   if (Phone.length !== 10) {
    //     return res.status(400).json({ error: "Enter valid contact number" });
    //   }

    // Check for existing email address
    try {
        const user = await User.findOne({ email });
        if (user) {
            res.json("Already exists", 409);
            return;
        }
        // } catch (e) {
        //     const error = new HttpError("Wrong Email Credentials", 400);
        //     return next(error);
        // }

        // Hash the password
        try {

            if (password) {
                // console.log(password);
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            // console.log(hashedPassword)

            // Create a new Seller instance based on the Seller model
            const newUser = new User({
                name,
                email,
                password: hashedPassword,  // Store the hashed password in the database
            });
            // console.log("hashedPassword", newUser.password);

            // Save the user data to the database
            await newUser.save();
            // console.log("hashedPassword", newUser.password);
            // Return a success response
            res.json("Successfully signed up", 200);
        } catch (error) {
            console.error("Error:", error);
            const dbError = new HttpError("Registration Failed", 500);
            return next(dbError);
        }
    } catch (e) {
        const error = new HttpError("Wrong Email Credentials", 400);
        return next(error);
    }

};

exports.registerUser = registerUser;
