const router = require("express").Router();
let Todo = require("../models/Todo");

router.route("/").get((req, res) => {
	Todo.find()
		.then((todos) => res.json(todos))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
	const todoContent = req.body.todoContent;
	const todoPriority = req.body.todoPriority;
	const todoDate = Date.parse(req.body.todoDate);

	const newTodo = new Todo({
		todoContent,
		todoPriority,
		todoDate,
	});

	newTodo
		.save()
		.then(() => res.json("Todo added"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
	Todo.findById(req.params.id)
		.then((todo) => res.json(todo))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
	Todo.findByIdAndDelete(req.params.id)
		.then(() => res.json("Todo Deleted"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
