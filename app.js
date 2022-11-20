const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const globalError = require("./controller/errorControllers");

const app = express();

app.use(function (req, res, next) {
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

app.use(function (req, res, next) {
  console.log(req.headers.origin);
  next();
});

// middlewares
if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// const whitelist = ["http://localhost:3000", "https://michky.vercel.app"];

// cors
// app.use(
//   cors({
//     origin: "*",
//     credentials: true, //access-control-allow-credentials:true
//     optionsSuccessStatus: 200,
//   })
// );

// const corsOptions = {
//   origin: "https://michky.vercel.app",
//   credentials: true, //access-control-allow-credentials:true
// };

// app.use(cors(corsOptions));

// body parser, reading data from the body req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(
//   cors({
//     origin: "https://michky.vercel.app",
//     optionsSuccessStatus: 200,
//     preflightContinue: true,
//   })
// );

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://michky.vercel.app");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
//   next();
// });

// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://michky.vercel.app",
//       "https://zohomail.com",
//     ],
//     credentials: true,
//   })
// );

// Routers
const projectRouter = require("./routes/projectRoutes");
const emailRouter = require("./routes/emailRoutes");

// projects routes
app.use("/api/v1/projects", projectRouter);
// email routes
app.use("/api/v1/contacts", emailRouter);

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
