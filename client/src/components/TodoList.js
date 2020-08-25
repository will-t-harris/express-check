import React, { useState, useEffect } from "react";
import axios from "axios";

import { TodoItem } from "./TodoItem";
import { Header } from "./Header";

export const TodoList = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get("http://localhost:5000/todos")
			.then((response) => {
				setTodos(response.data);
			})
			.then(() => {
				setIsLoading(false);
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

	const listTodos = () => {
		return todos
			.sort((a, b) => {
				if (new Date(a.todoDate).getDate() === new Date(b.todoDate).getDate()) {
					return a.todoPriority - b.todoPriority;
				}
			})
			.map((todo) => (
				<TodoItem
					key={todo._id}
					id={todo._id}
					deleteTodo={deleteTodo}
					todoContent={todo.todoContent}
					todoPriority={todo.todoPriority}
					todoDate={todo.todoDate}
				/>
			));
	};

	return (
		<div>
			<Header headerText="Pony Express" />
			{isLoading && <div className="pt-20">Loading...</div>}
			{todos && (
				<div className="flex flex-col space-y-0" data-testid="todo-list">
					{listTodos()}
				</div>
			)}
		</div>
	);
};
