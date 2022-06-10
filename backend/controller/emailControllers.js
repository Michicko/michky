const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const transporter = require("../email/emailTransporter");

exports.sendMail = catchAsync(async (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const country = req.body.country;

	let mail = `
      You have a new message from a user
      \n${message}

			\nName: ${name}
			\nEmail: ${email}
			\nCountry: ${country}
    `;

	const mailOptions = {
		from: process.env.EMAIL,
		to: process.env.EMAIL_RECEIVER,
		subject: "New Message from michky.com",
		text: mail,
	};

	await transporter(mailOptions, function (err) {
		if (err) {
			console.log("error from mail: ", error);
			return next(new AppError("Message not sent to email, try again", 500));
		}
	});

	res.status(200).json({
		status: "success",
		message: "Message sent to email",
	});
});
