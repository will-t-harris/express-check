const mongoose = require("mongoose");
const User = mongoose.model("User");
const { check, validationResult } = require("express-validator");

exports.getAllUsers = (req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.validateRegister = (req, res, next) => {
	check("email")
		.notEmpty()
		.isEmail()
		.normalizeEmail({
			gmail_remove_dots: false,
			gmail_remove_subaddress: false,
		})
		.withMessage("That is not a valid email");
	check("name")
		.notEmpty()
		.trim()
		.escape()
		.withMessage("You must supply a name");
	check("password", "Password must be at least 8 characters")
		.notEmpty()
		.isLength({
			min: 8,
		})
		.withMessage("Password must be at least 8 characters");
	check("passwordConfirm")
		.notEmpty()
		.isLength({ min: 8 })
		.withMessage("Confirmed password cannot be blank");

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		req.flash(
			"error",
			errors.mapped((err) => err.msg)
		);
		res.send({
			title: "Register",
			body: req.body,
			flashes: req.flash(),
		});
		return;
	}
	return next();
};

exports.register = async (req, res, next) => {
	const user = new User({ email: req.body.email, name: req.body.name });
	await User.register(user, req.body.password);
	return next();
};
