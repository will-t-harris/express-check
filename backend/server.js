const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flash = require("connect-flash");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(flash());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on("error", console.error.bind(console, "connection error:"));

connection.once("open", () => {
	console.log("MongoDB database connection established");
});

const todosRouter = require("./routes/todos");
const usersRouter = require("./routes/users");

app.use("/todos", todosRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
