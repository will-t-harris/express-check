const mongoose = require("mongoose");
const Project = mongoose.model("Project");
const Todo = mongoose.model("Todo");

exports.getAllProjects = (req, res) => {
	Project.find()
		.then((projects) => res.json(projects))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.addProject = (req, res) => {
	const projectTitle = req.body.projectTitle;

	const newProject = new Project({
		projectTitle,
	});

	newProject
		.save()
		.then(() => res.json("Project added"))
		.catch((err) => `Error: ${err}`);
};
