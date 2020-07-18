const router = require("express").Router();
const usersController = require("../controllers/usersController");
const authController = require("../controllers/authController");

router.get("/", usersController.getAllUsers);

router.post("/login", authController.login);

router.post(
	"/register",
	usersController.validateRegister,
	usersController.register,
	authController.login
);

module.exports = router;
