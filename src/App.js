import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { TodoList } from "./components/TodoList";
import { EditTodo } from "./components/EditTodo";
import { AddTodo } from "./components/AddTodo";

function App() {
	return (
		<Router>
			<div>
				<Route path="/" exact component={TodoList} />
				<Route path="/edit/:id" component={EditTodo} />
				<Route path="/add" component={AddTodo} />
			</div>
		</Router>
	);
}

export default App;
