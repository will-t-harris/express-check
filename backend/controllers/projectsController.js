const mongoose = require("mongoose");
const Project = mongoose.model("Project");

exports.getAllProjects = (req, res) => {
	Project.find()
		.then((projects) => res.json(projects))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};
