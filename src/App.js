import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { TodoList } from "./components/TodoList";
import { EditTodo } from "./components/EditTodo";
import { CreateTodo } from "./components/CreateTodo";

function App() {
	return (
		<Router>
			<div>
				<Route path="/" exact component={TodoList} />
				<Route path="/edit/:id" component={EditTodo} />
				<Route path="/create" component={CreateTodo} />
			</div>
		</Router>
	);
}

export default App;
