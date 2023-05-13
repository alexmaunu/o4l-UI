const express = require("express");
const router = express.Router();
const { postPrompt } = require("../controllers/chatGpt");

router.route("/").post(postPrompt);
module.exports = router;