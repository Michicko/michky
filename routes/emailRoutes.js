const express = require("express");
const { sendMail } = require("../controller/emailControllers");

const router = express.Router();

router.use(function (req, res, next) {
  console.log(req.headers.origin);
  next();
});
router.route("/").post(sendMail);

module.exports = router;
