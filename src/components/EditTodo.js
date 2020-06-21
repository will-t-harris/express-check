import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import { Sidebar } from "./Sidebar";

export const EditTodo = (props) => {
	const [todos, setTodos] = useState(() => {
		return { todoContent: "", todoPriority: 4, todoDate: new Date() };
	});
	const todoId = props.match.params.id;

	useEffect(() => {
		axios
			.get(`http://localhost:5000/todos/${todoId}`)
			.then((response) => {
				console.log(response);
				setTodos({ ...response.data });
			})
			.catch((err) => console.error(err));
	}, [todoId]);

	const onChangeTodoContent = (event) => {
		setTodos({ ...todos, todoContent: event.target.value });
	};

	const onChangeTodoPriority = (event) => {
		setTodos({ ...todos, todoPriority: event.target.value });
	};

	const onChangeTodoDate = (todoDate) => {
		setTodos({ ...todos, todoDate });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const todo = {
			todoContent: todos.todoContent,
			todoPriority: todos.todoPriority,
			todoDate: todos.todoDate,
		};

		axios
			.post(`http://localhost:5000/todos/edit/${todoId}`, todo)
			.then((response) => console.log(response.data))
			.then(() => {
				window.location = "/";
			})
			.catch((err) => console.error(err));
	};

	return (
		<div>
			<Sidebar />
			<h3 className="absolute w-full h-10 pl-8 text-2xl text-yellow-400 font-extrabold leading-10 bg-purple-800">
				<span role="img" aria-label="horse emoji">
					🐴
				</span>{" "}
				Edit Todo
			</h3>
			<form className="pt-16" onSubmit={onSubmit}>
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

					<DatePicker
						selected={todos.todoDate ? new Date(todos.todoDate) : null}
						onChange={onChangeTodoDate}
					/>
				</div>
				<div className="text-center">
					<input
						className="px-4 py-2 rounded bg-indigo-200 hover:bg-indigo-400 cursor-pointer"
						type="submit"
						value="Update Todo"
					/>
				</div>
			</form>
		</div>
	);
};
