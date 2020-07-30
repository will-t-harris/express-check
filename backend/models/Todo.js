const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
	{
		todoContent: { type: String, required: true, trim: true },
		todoPriority: {
			type: Number,
			required: true,
			trim: true,
			validate: [priorityLimit, "Priority must be between 0 and 4"],
		},
		todoDate: { type: Date, required: true },
	},
	{ timestamps: true }
);

function priorityLimit(value) {
	return value > 0 && value < 5;
}

module.exports = mongoose.model("Todo", todoSchema);
