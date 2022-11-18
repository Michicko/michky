const express = require("express");
const {
  getProjects,
  updateProject,
  deleteProject,
  createProject,
  getCloudinaryId,
} = require("../controller/projectControllers");
const { upload } = require("../utils/multer");
const { uploadImageToCloud, deleteCloudImage } = require("../utils/cloudinary");

const router = express.Router();

router.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // Pass to next layer of middleware
  next();
});

router.route("/").get(getProjects).post(createProject);

router.route("/:id").patch(updateProject).delete(deleteProject);

router.route("/uploadimage").post(upload, uploadImageToCloud);

router.route("/deleteimage").post(getCloudinaryId, deleteCloudImage);

module.exports = router;
