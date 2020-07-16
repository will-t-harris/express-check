const router = require("express").Router();
const Todo = require("../models/Todo");
const todosController = require("../controllers/todosController");

router.get("/", todosController.getTodos);

router.post("/add", todosController.addTodos);

router.get("/:id", todosController.getTodoById);

router.delete("/:id", todosController.deleteTodoById);

router.post("/edit/:id", todosController.editTodoById);

module.exports = router;
