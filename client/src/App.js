import React, { useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

import { TodoList } from "./components/TodoList";
import { EditTodo } from "./components/EditTodo";
import { AddTodo } from "./components/AddTodo";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Sidebar } from "./components/Sidebar";
import { Projects } from "./components/Projects";

function App() {
	const onDragEnd = useCallback((result, provided) => {
		console.log("Result:", result);
		console.log("Provided", provided);
	}, []);
	return (
		<Router>
			<DragDropContext onDragEnd={onDragEnd}>
				<Sidebar />
				<div>
					<Route path="/" exact component={TodoList} />
					<Route path="/edit/:id" component={EditTodo} />
					<Route path="/add" component={AddTodo} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
					<Route path="/projects" component={Projects} />
				</div>
			</DragDropContext>
		</Router>
	);
}

export default App;
