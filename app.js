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

// cors
app.use(
  cors({
    origin: "https://127.0.0.1:3000",
    credentials: true, //access-control-allow-credentials:true
  })
);

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Origin,Accept"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
// app.use(cors());

// body parser, reading data from the body req.body
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
