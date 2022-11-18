const express = require("express");
const { sendMail } = require("../controller/emailControllers");

const router = express.Router();
router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // Pass to next layer of middleware
  next();
});

router.route("/").post(sendMail);

module.exports = router;
