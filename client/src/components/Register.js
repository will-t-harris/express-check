import React, { useState } from "react";
import axios from "axios";

import { Header } from "./Header";

export const Register = (props) => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		const newUser = {
			email,
			name,
			password,
			passwordConfirm,
		};
		axios
			.post("http://localhost:5000/users/register", newUser)
			.then(() => (window.location = "/"))
			.catch((err) => console.error(`Error: ${err}`));
	};

	return (
		<>
			<Header headerText="Register" />
			<form className="flex flex-col" method="POST" onSubmit={onSubmit}>
				<h2 className="pt-20">Register</h2>
				<label htmlFor="name">Name</label>
				<input
					className="bg-purple-100"
					type="text"
					name="name"
					onChange={(event) => setName(event.target.value)}
				/>
				<label htmlFor="email">Email</label>
				<input
					className="bg-purple-100"
					type="email"
					name="email"
					onChange={(event) => setEmail(event.target.value)}
				/>
				<label htmlFor="password">Password</label>
				<input
					className="bg-purple-100"
					type="password"
					name="password"
					minLength={8}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<label htmlFor="passwordConfirm">Confirm Password</label>
				<input
					className="bg-purple-100"
					type="password"
					name="passwordConfirm"
					minLength={8}
					onChange={(event) => setPasswordConfirm(event.target.value)}
				/>
				<input type="submit" value="Register &#10148;" />
			</form>
		</>
	);
};
