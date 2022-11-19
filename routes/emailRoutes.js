const express = require("express");
const { sendMail } = require("../controller/emailControllers");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
  origin: "https://michky.vercel.app",
  methods: ["POST"],
  credentials: true,
  maxAge: 3600,
};

router.options("/", cors(corsOptions));
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://michky.vercel.app");

  next();
});
// router.route("/").post(sendMail);
router.post("/", cors(corsOptions), sendMail);

module.exports = router;
