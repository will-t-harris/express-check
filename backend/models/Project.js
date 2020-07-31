const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const projectSchema = new Schema({
	projectTitle: String,
	todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
