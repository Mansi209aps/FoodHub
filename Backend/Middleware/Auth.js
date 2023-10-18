const jwt = require("jsonwebtoken");
const HttpError = require("../models/HttpError");

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }
    try {
        // Authorization: 'Bearer TOKEN'
        const token = req.headers.authorization;
        // console.log("token: ", token);
        if (!token) {
            const error = new HttpError("Authentication failed!", 401);
            return next(error);
        }
        else {
            console.log("Authentication successful!!!");
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRATE);

        res.locals.userData = {
            userEmail: decodedToken.userEmail,
        };
        next();
    } catch (err) {
        const error = new HttpError("Authentication failed!", 403);
        console.log(err);
        return next(error);
    }
};
