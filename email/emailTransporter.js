const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: process.env.HOST,
	port: process.env.MAIL_PORT,
	secure: true, // use SSL
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	}
});

module.exports = transporter;
