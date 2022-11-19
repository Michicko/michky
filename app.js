const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const globalError = require("./controller/errorControllers");

const app = express();

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

app.use(cors());

// Routers
const projectRouter = require("./routes/projectRoutes");
const emailRouter = require("./routes/emailRoutes");

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
