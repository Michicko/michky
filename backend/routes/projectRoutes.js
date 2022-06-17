const express = require("express");
const {
	getProjects,
	updateProject,
	deleteProject,
	createProject,
	getCloudinaryId,
	checkBody,
} = require("../controller/projectControllers");
const { upload } = require("../utils/multer");
const { uploadImageToCloud, deleteCloudImage } = require("../utils/cloudinary");

const router = express.Router();

router
	.route("/")
	.get(getProjects)
	.post(createProject);

router
	.route("/:id")
	.patch(updateProject)
	.delete(deleteProject);

// router.route("/:id/updateImage").patch(updateProject);

// router.route("/images/uploadImage").post(
// 	upload,
// 	checkBody
// 	// uploadImageToCloud
// );

router.route('/uploadimage').post(
	upload,
	checkBody,
	uploadImageToCloud
	)

router.route("/deleteimage").post(getCloudinaryId, deleteCloudImage);


module.exports = router;
