const express = require("express");
const {
	getProjects,
	updateProject,
	deleteProject,
	createProject,
} = require("../controller/projectControllers");
const { upload } = require("../utils/multer");
const { uploadImageToCloud } = require("../utils/cloudinary");
const router = express.Router();

router
	.route("/")
	.get(getProjects)
	.post(upload, uploadImageToCloud, createProject);

router.route("/:id").patch(updateProject).delete(deleteProject);

module.exports = router;
