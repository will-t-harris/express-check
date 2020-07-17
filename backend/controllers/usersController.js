const mongoose = require("mongoose");
const User = mongoose.model("User");
const { check, validationResult } = require("express-validator");

exports.getAllUsers = (req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json(`Error: ${err}`));
};

exports.validateRegister = (req, res, next) => {
	check("email", "That is not a valid email")
		.notEmpty()
		.isEmail()
		.normalizeEmail({
			gmail_remove_dots: false,
			gmail_remove_subaddress: false,
		});
	check("name", "You must supply a name").notEmpty().trim().escape();
	check("password", "Password must be at least 8 characters")
		.notEmpty()
		.isLength({
			min: 8,
		});
	check("passwordConfirm", "Confirmed password cannot be blank")
		.notEmpty()
		.isLength({ min: 8 });

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
	User.create({
		email: req.body.email,
		name: req.body.name,
	}).then((user) => res.json(user));
	return next();
};

exports.register = async (req, res, next) => {};
