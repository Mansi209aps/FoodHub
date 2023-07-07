const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const app = express()
const port = 5000

dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.01byp2c.mongodb.net/foodhubdb?retryWrites=true&w=majority`
    )
    .then(() => {
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });