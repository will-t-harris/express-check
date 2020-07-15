import React from "react";
import { Formik } from "formik";
import EmailValidator from "email-validator";
import Yup from "yup";
import axios from "axios";

import { Header } from "./Header";

export const Register = (props) => {
	return (
		<>
			<Header headerText="Register" />
			<form className="flex flex-col" action="/register" method="POST">
				<h2 className="pt-20">Register</h2>
				<label htmlFor="name">Name</label>
				<input className="bg-purple-100" type="text" name="name" required />
				<label htmlFor="email">Email</label>
				<input className="bg-purple-100" type="email" name="email" required />
				<label htmlFor="password">Password</label>
				<input
					className="bg-purple-100"
					htmlFor="password"
					type="password"
					name="password"
				/>
				<label htmlFor="password-confirm">Confirm Password</label>
				<input
					className="bg-purple-100"
					htmlFor="password-confirm"
					type="password"
					name="password-confirm"
				/>
				<input type="submit" value="Register &#10148;" />
			</form>
		</>
	);
};
