import React, { useState } from "react";
import axios from "axios";

import { Sidebar } from "./Sidebar";

export const CreateTodo = () => {
	const [todos, setTodos] = useState({
		todoContent: "",
		todoPriority: 4,
		todoDate: new Date(),
	});

	const onChangeTodoContent = (event) => {
		setTodos({ ...todos, todoContent: event.target.value });
	};

	const onChangeTodoPriority = (event) => {
		setTodos({ ...todos, todoPriority: event.target.value });
	};

	const onChangeTodoDate = (date) => {
		setTodos({ ...todos, date });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const todo = {
			todoContent: todos.todoContent,
			todoPriority: todos.todoPriority,
			todoDate: todos.todoDate,
		};

		console.log(todo);

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
			<Sidebar />
			<h3 className="text-3xl text-indigo-800">Create New Todo</h3>
			<form onSubmit={onSubmit}>
				<div className="mb-2 text-center">
					<label>Todo Content: </label>
					<input
						className="border border-indigo-600"
						type="text"
						required
						value={todos.todoContent}
						onChange={onChangeTodoContent}
					/>
				</div>
				<div className="mb-2 text-center">
					<label>Todo Priority: </label>
					<input
						className="border border-indigo-600"
						type="number"
						min={0}
						max={4}
						value={todos.todoPriority}
						onChange={onChangeTodoPriority}
					/>
				</div>
				<div className="mb-2 text-center">
					<label>Todo Due Date: </label>
					<input
						className="border border-indigo-600"
						type="date"
						selected={todos.todoDate}
						onChange={onChangeTodoDate}
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
