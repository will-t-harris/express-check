import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<div className="float-left mt-10 flex flex-col h-screen bg-gray-800 text-white text-xl font-bold text-center w-1/6">
			<Link className="py-8 hover:underline" to="/">
				Home
			</Link>
			<Link className="py-8 hover:underline" to="/add">
				Add Todo
			</Link>
			<Link className="py-8 hover:underline" to="/projects">
				Projects
			</Link>
		</div>
	);
};
