import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export const TodoItem = ({
	todoContent,
	todoPriority,
	todoDate,
	id,
	deleteTodo,
}) => {
	let date = moment(todoDate);
	return (
		<div className="pl-8 pb-8 bg-gray-700 text-white">
			<p className="float-left">{todoContent}</p>
			<p className="">Priority: {todoPriority}</p>
			<p className="">{date.format("MMM D")}</p>
			<Link className="text-green-600 font-semibold" to={`/edit/${id}`}>
				Edit Todo
			</Link>{" "}
			|{" "}
			<button
				className="text-red-600 font-semibold"
				onClick={() => deleteTodo(id)}
			>
				Delete Todo
			</button>
			<hr className="border border-gray-900" />
		</div>
	);
};
