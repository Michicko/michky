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
	const { name, image, technologies, link, github, description } = req.body;
	const project = await Project.create({
		name,
		image,
		link,
		description,
	});

	res.status(201).json({
		status: "success",
		data: {
			project,
		},
	});
});

exports.updateProject = catchAsync(async (req, res, next) => {
	const { id } = req.params;
	const project = await Project.findByIdAndUpdate(id, req.body, {
		new: true,
		runValidators: true,
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
