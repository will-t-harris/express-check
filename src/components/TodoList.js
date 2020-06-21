import React, { useState, useEffect } from "react";
import axios from "axios";

import { Sidebar } from "./Sidebar";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5000/todos")
			.then((response) => {
				setTodos(response.data);
			})
			.catch((err) => console.error(err));
	}, []);

	const deleteTodo = (id) => {
		axios
			.delete(`http://localhost:5000/todos/${id}`)
			.then((response) => console.log(response.data))
			.catch((err) => console.error(err));

		const filteredTodos = todos.filter((todo) => todo._id !== id);
		setTodos(filteredTodos);
	};

	const listTodos = () =>
		todos.map((todo) => (
			<TodoItem
				key={todo._id}
				id={todo._id}
				deleteTodo={deleteTodo}
				todoContent={todo.todoContent}
				todoPriority={todo.todoPriority}
				todoDate={todo.todoDate}
			/>
		));

	return (
		<div>
			<Sidebar />
			<h2 className="text-xl font-extrabold text-center py-8">Current Todos</h2>
			<div className="flex flex-col">{listTodos()}</div>
		</div>
	);
};
