import React from "react";
import axios from "axios";

import { Header } from "./Header";

export const Login = (props) => {
	return (
		<>
			<Header headerText="Pony Express" />
			<form className="pt-16" action="/login" method="POST">
				<h2>Login</h2>
				<label htmlFor="email">Email Address</label>
				<input type="email" name="email" className="bg-purple-100" />
				<label htmlFor="password">Password</label>
				<input type="password" name="password" className="bg-purple-100" />
				<input type="submit" value="Log In &#10148;" />
			</form>
		</>
	);
};
