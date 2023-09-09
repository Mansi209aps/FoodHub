const mongoose = require('mongoose');

const subscribersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
})

const Subscribe = new mongoose.model("Subscribe", subscribersSchema);

module.exports = Subscribe;