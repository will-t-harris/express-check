import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

import { Header } from "./Header";
import { PrioritySelect } from "./PrioritySelect";

export const AddTodo = () => {
	const [todoContent, setTodoContent] = useState("");
	const [todoPriority, setTodoPriority] = useState(4);
	const [todoDate, setTodoDate] = useState(new Date());

	const onSubmit = (event) => {
		event.preventDefault();

		const todo = {
			todoContent,
			todoPriority,
			todoDate,
		};

		axios
			.post("http://localhost:5000/todos/add", todo)
			.then((res) => console.log(res.data))
			.then(() => {
				window.location = "/";
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<Header headerText="Add Todo" />
			<form className="pt-16" onSubmit={onSubmit}>
				<div className="mb-2 text-center">
					<label>Todo Content: </label>
					<input
						className="border border-indigo-600"
						type="text"
						required
						value={todoContent}
						onChange={(event) => setTodoContent(event.target.value)}
					/>
				</div>
				<div className="mb-2 text-center">
					<PrioritySelect
						todoPriority={todoPriority}
						setTodoPriority={setTodoPriority}
					/>
				</div>
				<div className="mb-2 text-center">
					<label>Todo Due Date: </label>
					<DatePicker
						selected={todoDate}
						onChange={(todoDate) => setTodoDate(todoDate)}
					/>
				</div>
				<div className="text-center">
					<input
						className="px-4 py-2 rounded bg-indigo-200 hover:bg-indigo-400 cursor-pointer"
						type="submit"
						value="Create Todo"
					/>
				</div>
			</form>
		</div>
	);
};
