import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import { Header } from "./Header";

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
		<div className="bg-purple-600">
			<Header headerText="Edit Todo" />
			<form
				className="grid grid-cols-3 grid-rows-none mx-auto pt-16"
				onSubmit={onSubmit}
			>
				<div className="flex col-start-2 row-start-1 mb-2 mx-auto text-center">
					<label className="pr-8 text-white font-bold self-center w-auto">
						Todo Content:
					</label>
					<textarea
						className="border border-indigo-600"
						type="text"
						required
						value={todos.todoContent}
						onChange={onChangeTodoContent}
					/>
				</div>
				<div className="col-start-2 row-start-2 mb-2 mx-auto text-center">
					<label className="pr-8 text-white font-bold self-center w-auto">
						Todo Priority:{" "}
					</label>
					<input
						className="w-16 py-2 border border-indigo-600 text-center"
						type="number"
						min={0}
						max={4}
						value={todos.todoPriority}
						onChange={onChangeTodoPriority}
					/>
				</div>
				<div className="flex flex-col col-start-2 row-start-3 mb-2 text-center">
					<label className="pr-8 text-white font-bold self-center w-auto">
						Todo Due Date:{" "}
					</label>

					<DatePicker
						className="mb-10"
						selected={todos.todoDate ? new Date(todos.todoDate) : null}
						onChange={onChangeTodoDate}
					/>
					<input
						className="px-4 py-2 mx-auto rounded w-32 bg-indigo-200 hover:bg-indigo-400 cursor-pointer"
						type="submit"
						value="Update Todo"
					/>
				</div>
			</form>
		</div>
	);
};
