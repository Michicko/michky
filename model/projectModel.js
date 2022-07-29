const mongoose = require("mongoose");
const slugify = require('slugify');

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
	description: {
		type: String,
		required: [true, "A project must have a description"],
	},
	stacks: {
		type: [String],
		required: [true, "A project must have stacks"],
	},
	slug: {
		type: String
	}
});

projectSchema.pre("save", function (next) {
	this.slug = slugify(this.name);
	next();
});


const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
