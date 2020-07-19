const router = require("express").Router();
const todosController = require("../controllers/todosController");

router.get("/", todosController.getAllTodos);

router.post("/add", todosController.addTodos);

router.get("/:id", todosController.getTodoById);

router.delete("/:id", todosController.deleteTodoById);

router.post("/edit/:id", todosController.editTodoById);

module.exports = router;
