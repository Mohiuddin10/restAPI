const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Hme route setup 
app.get("/", (req, res) => {
    // res.send("your app is running without any issue")
    res.sendFile(__dirname + "/index.html");
})

module.exports = app; 