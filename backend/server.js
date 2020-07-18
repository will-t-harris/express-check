const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const path = require("path");
const cors = require("cors");
const flash = require("connect-flash");
const passport = require("passport");

require("./models/Todo");
require("./models/User");
const todosRouter = require("./routes/todos");
const usersRouter = require("./routes/users");
require("./handlers/passport");

require("dotenv").config({ path: ".env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(
	session({
		secret: process.env.SECRET,
		key: process.env.KEY,
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use((req, res, next) => {
	res.locals.flashes = req.flash();
	res.locals.user = req.user || null;
	next();
});

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

app.use("/todos", todosRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
