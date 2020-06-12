const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");

exports.homePage = (req, res) => {
	res.send("from the controller");
};
