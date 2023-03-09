//Initializing express module
const express = require('express')
const app = express()

//Enabling use of environment variables.
require('dotenv').config()

//Port the api will run on.
const port = process.env.PORT || 3000

//Endpoints

//Example endpoint
app.get("/", (req,res) => {
    res.send("Hello!")
});

//Listening on port
app.listen(port, () => {
    console.log(`Listening on.....PORT: ${port}`)
});
