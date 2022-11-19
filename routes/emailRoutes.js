const express = require("express");
const { sendMail } = require("../controller/emailControllers");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: true,
  methods: ["POST"],
  credentials: true,
  maxAge: 3600,
};

router.options("/", cors(corsOptions));
// router.route("/").post(sendMail);
router.post("/", cors(corsOptions), sendMail);

module.exports = router;
