const express = require("express")
const cardrouter = require("./cards")
const router = express.Router();

router.use("/cards", cardrouter);

module.exports = router