const Project = require("../model/projectModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.getProjects = catchAsync(async (req, res, next) => {
	const projects = await Project.find({});

	res.status(200).json({
		status: "success",
		result: projects.length,
		data: {
			projects,
		},
	});
});

exports.createProject = catchAsync(async (req, res, next) => {
	const { name, image, link, description,stacks, slug } = req.body;
	const project = await Project.create({
		name,
		image,
		link,
		description,
		stacks,
		slug
	});

	res.status(201).json({
		status: "success",
		data: {
			project,
		},
	});
});

exports.checkBody = catchAsync(async (req, res, next) => {
	console.log('body: ',req.body)
	console.log('files: ', req.files);
	console.log('file: ', req.file )
	next();
})

exports.updateProject = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const project = await Project.findByIdAndUpdate(id, req.body, {
		new: true,
		// runValidators: true,
	});

	if (!project) {
		return next(new AppError("No project with that id", 404));
	}

	res.status(200).json({
		status: "success",
		data: {
			project,
		},
	});
});

exports.deleteProject = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const project = await Project.findByIdAndDelete(id);

	if (!project) {
		return next(new AppError("No project with that id", 404));
	}

	res.status(204).json({
		status: "success",
		data: null,
	});
});


exports.getCloudinaryId = catchAsync(async (req, res, next) => {
	const id = req.body.public_id;
	req.cloudinary_id = id;
	next();
})
