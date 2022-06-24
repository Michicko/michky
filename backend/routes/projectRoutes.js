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

router.route("/").get(getProjects).post(createProject);

router.route("/:id").patch(updateProject).delete(deleteProject);

router.route("/uploadimage").post(upload, uploadImageToCloud);

router.route("/deleteimage").post(getCloudinaryId, deleteCloudImage);

module.exports = router;
