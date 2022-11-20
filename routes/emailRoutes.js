const express = require("express");
const { sendMail } = require("../controller/emailControllers");

const router = express.Router();

router.options("/");
router.route("/").post(sendMail);

module.exports = router;
