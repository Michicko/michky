const cloudinary = require("cloudinary").v2;
require("dotenv").config({ path: "./config.env" });
const slugify = require("slugify");
const catchAsync = require("../utils/catchAsync");
const fs = require("fs");

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
	// secure: true,
});

const cloudinaryUploader = async (path, identifier) =>
	await cloudinary.uploader.upload(path, {
		public_id: `michky/images/${slugify(identifier)}`,
	});

// remove temorary saved image todisk
const removeTempImg = (path) => {
	return fs.unlink(path, () => {});
};

// create object
const createObjData = (url, id) => {
	return {
		url,
		cloudinary_id: id,
	};
};

exports.uploadImageToCloud = catchAsync(async (req, res, next) => {
	const id = req.body.name;
	const imagePath = req.file.path;
	const result = await cloudinaryUploader(imagePath, id);
	const data = createObjData(result.secure_url, result.public_id);
	// asign image to req.body.image
	req.body.image = data;
	// remove temp image from disk
	removeTempImg(imagePath);
	next();
});
