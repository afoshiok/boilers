const express = require("express"); 
const router = express.Router();
//ENDPOINTS
router.get("/", (req,res) => {
    res.send("This is ROUTER 1 - link: localhost:3000/route1/.")
})

router.get("/link1", (req,res) => {
    res.send("This is ROUTER 1 / Link 1 - link: localhost:3000/route1/link1")
})


module.exports = router;