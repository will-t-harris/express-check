import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import { Header } from "./Header";
import { PrioritySelect } from "./PrioritySelect";

export const EditTodo = (props) => {
	const [todoContent, setTodoContent] = useState("");
	const [todoPriority, setTodoPriority] = useState(4);
	const [todoDate, setTodoDate] = useState(new Date());

	const todoId = props.match.params.id;

	useEffect(() => {
		axios
			.get(`http://localhost:5000/todos/${todoId}`)
			.then((response) => {
				console.log(response);
				setTodoContent(response.data.todoContent);
				setTodoPriority(response.data.todoPriority);
				setTodoDate(response.data.todoDate);
			})
			.catch((err) => console.error(err));
	}, [todoId]);

	const onSubmit = (event) => {
		event.preventDefault();

		const todo = {
			todoContent,
			todoPriority,
			todoDate,
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
						value={todoContent}
						onChange={(event) => setTodoContent(event.target.value)}
					/>
				</div>
				<div className="col-start-2 row-start-2 mb-2 mx-auto text-center">
					<PrioritySelect
						todoPriority={todoPriority}
						setTodoPriority={setTodoPriority}
					/>
				</div>
				<div className="flex flex-col col-start-2 row-start-3 mb-2 text-center">
					<label className="pr-8 text-white font-bold self-center w-auto">
						Todo Due Date:{" "}
					</label>

					<DatePicker
						className="mb-10"
						selected={todoDate ? new Date(todoDate) : null}
						onChange={(todoDate) => setTodoDate(todoDate)}
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
