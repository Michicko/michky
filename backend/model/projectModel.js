const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true,
		required: [true, "A project must have a name"],
	},
	image: {
		type: mongoose.Schema.Types.Mixed,
		required: [true, "A project must have an image"],
	},
	link: {
		type: String,
		required: [true, "A project must have a link to view"],
	},
	// github: {
	// 	type: String,
	// 	required: [true, "A project must have a github repo link"],
	// },
	description: {
		type: String,
		required: [true, "A project must have a description"],
	},
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
