import React from "react";

export const Login = () => {
	return (
		<form action="/login" method="POST">
			<h2>Login</h2>
			<label htmlFor="email">Email Address</label>
			<input type="email" name="email" className="bg-purple-100" />
			<label htmlFor="password">Password</label>
			<input type="password" name="password" className="bg-purple-100" />
			<input type="submit" value="Log In &#10148;" />
		</form>
	);
};
