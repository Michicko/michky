import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./pages/Adminpages/Admin";
import Loader from "./components/Loader";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage/Homepage";
import CreateProject from "./pages/Adminpages/CreateProject";
import projs from "./utils/projects";
import EditProject from "./pages/Adminpages/EditProject";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [projects, setProjects] = useState([]);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setProjects(projs);
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return (
			<div className='error-container'>{/* Error loading projects */}</div>
		);
	}

	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Homepage setIsLoading={setIsLoading} />
				</Route>
				<Route exact path='/admin'>
					<Admin projects={projects} setProjects={setProjects} />
				</Route>
				<Route exact path='/admin/create-project'>
					<CreateProject projects={projects} setProjects={setProjects} />
				</Route>
				<Route exact path='/admin/projects/:slug'>
					<EditProject projects={projects} />
				</Route>
				<Route path='*'>
					<Errorpage />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
