const express = require("express");
const { sendMail } = require("../controller/emailControllers");

const router = express.Router();
router.route("/").post(sendMail);

module.exports = router;
