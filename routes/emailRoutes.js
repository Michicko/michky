const express = require("express");
const { sendMail } = require("../controller/emailControllers");

const router = express.Router();

router.route("/").post(sendMail);
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://michky.vercel.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  res.header("Access-Control-Max-Age", 60 * 60 * 24 * 365);
  next();
});

module.exports = router;
