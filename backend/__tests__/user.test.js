const mongoose = require("mongoose");
const dbHandler = require("../db-handler");
const User = require("../models/User");
const userData = {
	email: "test@test.com",
	name: "testUser",
};

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("User model", () => {
	it("creates and saves user with correct info", async () => {
		const validUser = new User(userData);
		const savedUser = await validUser.save();

		expect(savedUser._id).toBeDefined();
		expect(savedUser.name).toEqual(userData.name);
		expect(savedUser.email).toEqual(userData.email);
	});

	it("suceeds with extra field, but does not save extra field", async () => {
		const userWithInvalidField = new User({
			email: "test@test.com",
			name: "testUser",
			nickname: "testUserNickname",
		});
		const savedUserWithInvalidField = await userWithInvalidField.save();

		expect(savedUserWithInvalidField._id).toBeDefined();
		expect(savedUserWithInvalidField.name).toEqual(userWithInvalidField.name);
		expect(savedUserWithInvalidField.email).toEqual(userWithInvalidField.email);
		expect(savedUserWithInvalidField.nickname).toBeUndefined();
	});

	it("fails without email field", async () => {
		const userWithoutEmail = new User({
			name: "testUser",
		});
		let error;
		try {
			const savedUserWithoutEmail = await userWithoutEmail.save();
			error = savedUserWithoutEmail;
		} catch (err) {
			error = err;
		}

		expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(error.errors.email).toBeDefined();
	});

	it("fails without name field", async () => {
		const userWithoutName = new User({
			email: "test@test.com",
		});
		let error;
		try {
			const savedUserWithoutName = await userWithoutName.save();
			error = savedUserWithoutName;
		} catch (err) {
			error = err;
		}

		expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
		expect(error.errors.name).toBeDefined();
	});
});
