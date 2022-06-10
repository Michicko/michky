import { useState } from "react";
import Loader from "./components/Loader";
import Homepage from "./pages/Homepage/Homepage";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [projects, setProjects] = useState([]);
	const [isError, setIsError] = useState(false);

	if (isLoading) {
		return (
			<Loader/>
		);
	}

	if (isError) {
		return (
			<div className="error-container">
				{/* Error loading projects */}
			</div>
		)
	}

	return (
		<>
			<Homepage setIsLoading={setIsLoading} />
		</>
	);
}

export default App;
