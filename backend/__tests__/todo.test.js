const mongoose = require("mongoose");
const dbHandler = require("../db-handler");
const Todo = require("../models/Todo");
const testDate = new Date();
const todoData = {
	todoContent: "This is test todo content",
	todoPriority: 1,
	todoDate: testDate,
};

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("Todo model", () => {
	it("creates and saves todo with valid info", async () => {
		const validTodo = new Todo(todoData);
		const savedTodo = await validTodo.save();

		expect(savedTodo._id).toBeDefined();
		expect(savedTodo.todoContent).toEqual(todoData.todoContent);
		expect(savedTodo.todoPriority).toEqual(todoData.todoPriority);
		expect(savedTodo.todoDate).toEqual(todoData.todoDate);
	});

	it("suceeds with an extra field, but does not save extra field", async () => {
		const todoWithInvalidField = new Todo({
			todoContent: "This is test todo content",
			todoPriority: 1,
			todoDate: testDate,
			todoBoop: "boop",
		});
		const savedTodoWithInvalidField = await todoWithInvalidField.save();

		expect(savedTodoWithInvalidField._id).toBeDefined();
		expect(savedTodoWithInvalidField.todoContent).toEqual(todoData.todoContent);
		expect(savedTodoWithInvalidField.todoPriority).toEqual(
			todoData.todoPriority
		);
		expect(savedTodoWithInvalidField.todoDate).toEqual(todoData.todoDate);
		expect(savedTodoWithInvalidField.todoBoop).toBeUndefined();
	});

	it("throws validation error without todoContent field", async () => {
		const todoWithoutTodoContent = new Todo({
			todoPriority: 1,
			todoDate: testDate,
		});
		let error;

		try {
			error = await todoWithoutTodoContent.save();
		} catch (err) {
			error = err;
		}

		expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(error.errors.todoContent).toBeDefined();
	});

	it("throws validation error without todoPriority field", async () => {
		const todoWithoutTodoPriority = new Todo({
			todoContent: "This is test todo content",
			todoDate: testDate,
		});
		let error;

		try {
			error = await todoWithoutTodoPriority.save();
		} catch (err) {
			error = err;
		}

		expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(error.errors.todoPriority).toBeDefined();
	});

	it("throws validation error without todoDate field", async () => {
		const todoWithoutTodoDate = new Todo({
			todoContent: "This is test todo content",
			todoPriority: 1,
		});
		let error;

		try {
			error = await todoWithoutTodoDate.save();
		} catch (err) {
			error = err;
		}

		expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(error.errors.todoDate).toBeDefined();
	});
});
