import React from "react";
import { Link } from "react-router-dom";

export const TodoItem = ({ todoContent, todoPriority, todoDate, id }) => {
	return (
		<div>
			<ul className="flex">
				<li className="">{todoContent}</li>
				<li className="text-center">{todoPriority}</li>
				<li className="">{todoDate}</li>
			</ul>
			<Link to={`/edit/${id}`}>Edit Todo</Link>
		</div>
	);
};
