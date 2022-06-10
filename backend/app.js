const express = require('express');
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const globalError = require("./controller/errorControllers");

const app = express();

// middlewares
if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'));
}

app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(cors());

// Routers
const projectRouter = require('./routes/projectRoutes');
const emailRouter = require('./routes/emailRoutes');

// projects routes
app.use('/api/v1/projects', projectRouter);

// email routes
app.use("/api/v1/contacts", emailRouter);

// render client
// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
	// res.sendFile(path.join(__dirname, "/client/build", "index.html"));
	// res.sendFile(path.join(__dirname, "../client/build", "index.html"));
// });

// Not found
app.all("*", (req, res, next) => {
	res.status(404).json({
		status: "fail",
		message: `Can't find ${req.originalUrl} on this server`,
	});
});

// Handle error
app.use(globalError);


module.exports = app;