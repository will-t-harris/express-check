const Todo = require("../models/Todo");

exports.getAllTodos = async (req, res) => {
	Todo.find()
		.then((todos) => todos.sort((a, b) => a.todoDate - b.todoDate))
		.then((todos) => res.json(todos))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.addTodos = (req, res) => {
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
};

exports.getTodoById = async (req, res) => {
	Todo.findById(req.params.id)
		.then((todo) => res.json(todo))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.deleteTodoById = (req, res) => {
	Todo.findByIdAndDelete(req.params.id)
		.then(() => res.json("Todo Deleted"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.editTodoById = (req, res) => {
	Todo.findById(req.params.id).then((todo) => {
		todo.todoContent = req.body.todoContent;
		todo.todoPriority = Number(req.body.todoPriority);
		todo.todoDate = Date.parse(req.body.todoDate);

		todo
			.save()
			.then(() => res.json("Todo updated"))
			.catch((err) => res.status(400).json(`Error: ${err}`));
	});
};
