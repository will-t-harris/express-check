import React from "react";

export const TodoItem = (props) => {
	return (
		<tr>
			<td>{props.todoContent}</td>
			<td>{props.todoPriority}</td>
			<td>{props.todoDate}</td>
		</tr>
	);
};
