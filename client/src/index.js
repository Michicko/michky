import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { PageProvider } from "./contexts/page_context";

ReactDOM.render(
	<PageProvider>
		<App />
	</PageProvider>,
	document.getElementById("root")
);
