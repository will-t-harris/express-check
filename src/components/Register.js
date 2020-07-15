import React, { useState } from "react";
import axios from "axios";

import { Header } from "./Header";

export const Register = (props) => {
	const [user, setUser] = useState({ email: "", name: "" });

	const onSubmit = (event) => {
		event.preventDefault();

		const newUser = {
			email: user.email,
			name: user.name,
		};
		axios
			.post("http://localhost:5000/users/add", newUser)
			.then((res) => console.log(res.data));
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
					required
					onChange={(event) => setUser({ ...user, name: event.target.value })}
				/>
				<label htmlFor="email">Email</label>
				<input
					className="bg-purple-100"
					type="email"
					name="email"
					required
					onChange={(event) => setUser({ ...user, email: event.target.value })}
				/>
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
