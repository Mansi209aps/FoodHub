require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI, {
            useNewUrlParser: true,
        });
        console.log("FoodHub DB Connected");
    } catch (error) {
        console.log("Error");
        console.log(error);
    }
};

module.exports = connectDB;
