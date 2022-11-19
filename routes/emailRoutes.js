const express = require("express");
const { sendMail } = require("../controller/emailControllers");

const router = express.Router();

// router.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "https://michky.vercel.app");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Max-Age", "1800");
//   res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,PUT,OPTIONS");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//   );
//   next();
// });
router.route("/").post(sendMail);

module.exports = router;
