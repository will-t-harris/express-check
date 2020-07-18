const passport = require("passport");

exports.login = passport.authenticate("local", {
	failureRedirect: "/login",
	failureMessage: "Failed Login",
	successRedirect: "/todos",
	successMessage: "Login successful",
});

exports.logout = (req, res) => {
	req.logout();
	res.redirect("/todos");
};
