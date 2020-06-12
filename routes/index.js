const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.homePage);

// get /todos getAllTodos
// get /todos/:id getTodoById
// post /todos createTodo
// put todos/:id update todo
// delete todos/:id delete a todo

module.exports = router;
