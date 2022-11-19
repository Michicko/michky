const express = require("express");
const { sendMail } = require("../controller/emailControllers");
const cors = require("cors");

const router = express.Router();

router.options("/", cors());
router.post("/", cors(), sendMail);
// router.route("/", cors()).post(sendMail);

module.exports = router;
