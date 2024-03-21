const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const globalError = require("./controller/errorControllers");

const app = express();

// middlewares
if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}
// body parser, reading data from the body req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Origin", "https://michky.netlify.app/");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("access-control-expose-headers", "set-cookie");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,X-PINGOTHER, Accept"
  );
  next();
});

const corsOptions = {
  //To allow requests from client
  // origin: "http://localhost:5173",
  methods: ["GET", "POST", "PATCH", "DELETE"],
  origin: "https://michky.netlify.app/",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};


app.use(cors(corsOptions));

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
