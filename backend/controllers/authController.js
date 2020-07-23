const passport = require("passport");

exports.login = passport.authenticate("local", {
	successRedirect: "/todos",
	failureRedirect: "/login",
});

exports.logout = (req, res) => {
	req.logout();
	console.log("logged out");
	res.redirect("/todos");
};

exports.isLoggedIn = (req, res, next) => {
	// console.log(`Request: ${req}`);
	console.log(`Response: ${res}`);
	if (req.isAuthenticated()) {
		console.log("authenticated");
		return next();
	}
	console.log("error");
	res.redirect("/login");
};
