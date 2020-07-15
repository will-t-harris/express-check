const router = require("express").Router();
const User = require("../models/User");

router.route("/").get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
	const email = req.body.email;
	const name = req.body.name;

	const newUser = new User({ email, name });

	newUser
		.save()
		.then(() => res.json("User added"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
