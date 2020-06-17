const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
	{
		todoContent: { type: String, required: true },
		todoPriority: { type: Number, required: true },
		todoDate: { type: Date, required: true },
	},
	{ timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
