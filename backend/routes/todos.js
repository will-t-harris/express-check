const router = require("express").Router();
const todosController = require("../controllers/todosController");
const authController = require("../controllers/authController");

router.get("/", todosController.getAllTodos);

router.post("/add", todosController.addTodos);

router.get("/:id", todosController.getTodoById);

router.delete("/:id", todosController.deleteTodoById);

router.post("/edit/:id", todosController.editTodoById);

router.get("/isLoggedIn", authController.isLoggedIn);

module.exports = router;
