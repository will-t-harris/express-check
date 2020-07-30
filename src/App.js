import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { TodoList } from "./components/TodoList";
import { EditTodo } from "./components/EditTodo";
import { AddTodo } from "./components/AddTodo";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Sidebar } from "./components/Sidebar";
import { Projects } from "./components/Projects";

function App() {
	return (
		<Router>
			<Sidebar />
			<div>
				<Route path="/" exact component={TodoList} />
				<Route path="/edit/:id" component={EditTodo} />
				<Route path="/add" component={AddTodo} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/projects" component={Projects} />
			</div>
		</Router>
	);
}

export default App;
