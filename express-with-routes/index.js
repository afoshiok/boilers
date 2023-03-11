const express = require('express')
const app = express()

//Enabling use of environment variables.
require('dotenv').config()

//Port the api will run on.
const port = process.env.PORT || 3000

//Importing the routes
const route1 = require("./routes/route1")
const route2 = require("./routes/route2")

//Using the routes in express app
app.use("/route1", route1) //Link will be localhost:3000/route1
app.use("/route2", route2) //Link will be localhost:3000/route1


//ENDPOINTS
//Example endpoint
app.get("/", (req,res) => {
    res.send("Hello!")
});

//Listening on port
app.listen(port, () => {
    console.log(`Listening on.....PORT: ${port}`)
});