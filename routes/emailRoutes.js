const express = require("express");
const { sendMail } = require("../controller/emailControllers");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: "https://michky.vercel.app",
  methods: ["POST"],
  maxAge: 3600,
};

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://michky.vercel.app");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

router.options("/", cors(corsOptions));
// router.route("/").post(sendMail);
router.post("/", cors(corsOptions), sendMail);

module.exports = router;
