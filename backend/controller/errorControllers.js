const AppError = require("../utils/appError");

const handleCastErrorDb = (err) => {
	const message = `Invalid ${err.path}: ${err.value}`;
	return new AppError(message, 400);
};

const handleDuplicateKeyDb = (err) => {
	const objKey = Object.keys(err.keyValue)[0];
	const objVal = Object.values(err.keyValue)[0];
	const message = `Duplicate ${objKey}: ${objVal}. Please use another ${objKey}.`;
	return new AppError(message, 400);
};

const handleValidationErrorDb = (err) => {
	const errors = Object.values(err.errors).map((el) => el.message);
	const message = `Invalid input data ${errors.join(". ")}`;
	return new AppError(message, 400);
};


const sendErrorDev = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		error: err,
		message: err.message,
		stack: err.stack,
	});
};

const sendErrorProd = (err, res) => {
	// Operational we trust
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});

		// programming error or other unknown error: don't leak to client
	} else {
		// Log error
		console.error("Error **", err);

		res.status(500).json({
			status: "error",
			message: "Something went wrong!",
		});
	}
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || "error";

	if (process.env.NODE_ENV === "development") {
		sendErrorDev(err, res);
	} else if (process.env.NODE_ENV === "production") {
		let error = JSON.parse(JSON.stringify(err));

		if (error.name === "CastError") {
			error = handleCastErrorDb(error);
		}

		if (error.code === 11000) {
			error = handleDuplicateKeyDb(error);
		}

		if (error.name === "ValidationError") {
			error = handleValidationErrorDb(error);
		}

		sendErrorProd(error, res);
	}
};
