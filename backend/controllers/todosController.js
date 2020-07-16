const mongoose = require("mongoose");
const Todo = require("../models/Todo");
exports.getTodos = async (req, res) => {
	Todo.find()
		.then((todos) => todos.sort((a, b) => a.todoDate - b.todoDate))
		.then((todos) => res.json(todos))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};
