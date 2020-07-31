import React from "react";
import axios from "axios";

export const LogoutButton = ({ twClasses }) => {
	const handleLogout = () => {
		axios
			.get("http://localhost:5000/users/logout")
			.then(() => (window.location = "/"))
			.catch((err) => console.error(err));
	};
	return (
		<button onClick={handleLogout} className={twClasses}>
			LOG OUT
		</button>
	);
};
