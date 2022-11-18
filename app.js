const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const globalError = require("./controller/errorControllers");

const app = express();

// Routers
const projectRouter = require("./routes/projectRoutes");
const emailRouter = require("./routes/emailRoutes");

// middlewares
if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// cors
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
  })
);

// body parser, reading data from the body req.body
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  // Pass to next layer of middleware
  next();
});

// projects routes
app.use("/api/v1/projects", projectRouter);

// email routes
app.use("/api/v1/contacts", emailRouter);

// render client
// app.use(express.static(path.join(__dirname, "/client/build")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
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
