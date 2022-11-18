const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const transporter = require("../email/emailTransporter");

exports.sendMail = catchAsync(async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const intro = "You have a new mail";

  let mail = `
	\n${intro}
	\n${message}

	\nName: ${name}
	\nEmail: ${email}
  `;

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL_RECEIVER,
    subject: "New Message from michky.com",
    text: mail,
  };

  await transporter.sendMail(mailOptions, function (err, result) {
    if (err) {
      return next(new AppError("Message not sent to email, try again", 500));
    }
    res.status(200).json({
      status: "success",
      message: "Message sent. I'll get back to you shortly.",
    });
  });
});
