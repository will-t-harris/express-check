const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const path = require("path");
const bodyParser = require("body-parser");

const helpers = require("./helpers");
const routes = require("./routes/index");

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(expressValidator());

app.use((req, res, next) => {
	res.locals.h = helpers;
	res.locals.currentPath = req.path;
	next();
});

app.use("/", routes);

module.exports = app;
