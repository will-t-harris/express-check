import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<div className="float-left h-screen bg-purple-500 w-1/6">
			<Link to="/">Home</Link>
			<Link to="/create">Add Todo</Link>
		</div>
	);
};
