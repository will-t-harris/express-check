import React, { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "./Header";

export const Projects = () => {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		axios.get("http://localhost:5000/projects").then((res) => console.log(res));
	}, []);

	return (
		<>
			<Header headerText="Projects" />
			<div>From the projects component</div>
		</>
	);
};
