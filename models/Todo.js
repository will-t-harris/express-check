const mongoose = require("mongoose");
const slug = require("slugs");

const todoSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: "Please enter a todo name",
	},
	slug: String,
	created: {
		type: Date,
		default: Date.now,
	},
	done: {
		type: Boolean,
	},
});

todoSchema.pre("save", async function (next) {
	if (!this.isModified("name")) return next();

	this.slug = slug(this.name);

	const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, "i");

	const todoWithSlug = await this.constructor.find({ slug: slugRegEx });

	if (todoWithSlug.length) {
		this.slug = `${this.slug}-${todoWithSlug.length + 1}`;
	}

	next();
});

module.exports = mongoose.model("Todo", todoSchema);
