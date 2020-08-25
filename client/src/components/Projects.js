import React, { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "./Header";

export const Projects = () => {
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		axios
			.get("http://localhost:5000/projects")
			.then((res) => setProjects(res.data));
	}, []);

	return (
		<>
			<Header headerText="Projects" />
			<div className="pt-20">
				{!projects && <div>Loading...</div>}
				{projects && projects.map((project) => project.projectTitle)}
			</div>
		</>
	);
};
