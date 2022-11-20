const express = require("express");
const { sendMail } = require("../controller/emailControllers");

const router = express.Router();

router.use(function (req, res, next) {
  console.log(req.headers.origin);
  next();
});

router.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    "http://localhost:3000",
    "https://michky.vercel.app",
    "https://zohomail.com",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});
router.route("/").post(sendMail);

module.exports = router;
