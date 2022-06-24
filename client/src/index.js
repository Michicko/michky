import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { ProjectsProvider } from "./contexts/projects_context";

ReactDOM.render(
	<ProjectsProvider>
		<App />
	</ProjectsProvider>,
	document.getElementById("root")
);
