import React, { useState } from "react";
import axios from "axios";

import { Header } from "./Header";

export const Register = (props) => {
	const [user, setUser] = useState({
		email: "",
		name: "",
		password: "",
		passwordConfirm: "",
	});

	const onSubmit = (event) => {
		event.preventDefault();

		const newUser = {
			email: user.email,
			name: user.name,
			password: user.password,
			passwordConfirm: user.passwordConfirm,
		};
		axios
			.post("http://localhost:5000/users/register", newUser)
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
					onChange={(event) => setUser({ ...user, name: event.target.value })}
				/>
				<label htmlFor="email">Email</label>
				<input
					className="bg-purple-100"
					type="email"
					name="email"
					onChange={(event) => setUser({ ...user, email: event.target.value })}
				/>
				<label htmlFor="password">Password</label>
				<input
					className="bg-purple-100"
					type="password"
					name="password"
					minLength={8}
					onChange={(event) =>
						setUser({ ...user, password: event.target.value })
					}
				/>
				<label htmlFor="passwordConfirm">Confirm Password</label>
				<input
					className="bg-purple-100"
					type="password"
					name="passwordConfirm"
					minLength={8}
					onChange={(event) =>
						setUser({ ...user, passwordConfirm: event.target.value })
					}
				/>
				<input type="submit" value="Register &#10148;" />
			</form>
		</>
	);
};
