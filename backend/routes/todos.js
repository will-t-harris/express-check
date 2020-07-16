const router = require("express").Router();
const Todo = require("../models/Todo");
const todosController = require("../controllers/todosController");

router.get("/", todosController.getTodos);

router.route("/add").post((req, res) => {
	const todoContent = req.body.todoContent;
	const todoPriority = Number(req.body.todoPriority);
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

router.route("/edit/:id").post((req, res) => {
	Todo.findById(req.params.id).then((todo) => {
		todo.todoContent = req.body.todoContent;
		todo.todoPriority = Number(req.body.todoPriority);
		todo.todoDate = Date.parse(req.body.todoDate);

		todo
			.save()
			.then(() => res.json("Todo updated"))
			.catch((err) => res.status(400).json(`Error: ${err}`));
	});
});

module.exports = router;
