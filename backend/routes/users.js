const router = require("express").Router();
const usersController = require("../controllers/usersController");

router.get("/", usersController.getAllUsers);

// router.get("/login", usersController.loginForm);

router.post(
	"/register",
	usersController.validateRegister,
	usersController.register
);

module.exports = router;
