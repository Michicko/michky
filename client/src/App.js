import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./pages/Adminpages/Admin";
import Loader from "./components/Loader";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage/Homepage";
import CreateProject from "./pages/Adminpages/CreateProject";
import projs from "./utils/projects";
import EditProject from "./pages/Adminpages/EditProject";
import Portal from "./Portal";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [projects, setProjects] = useState([]);
	const [isError, setIsError] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState("");
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		setProjects(projs);
	}, []);

	const displayAlert = (show, type, message) => {
		setShowAlert(show);
		setAlertType(type);
		setAlertMessage(message);
	};

	useEffect(() => {
		const alertTime = setTimeout(() => {
			setShowAlert(false);
		}, 4000);

		return () => {
			clearTimeout(alertTime);
		};
	}, [showAlert]);

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return (
			<div className='error-container'>{/* Error loading projects */}</div>
		);
	}

	return (
		<>
			{/* for alerts */}
			<Portal>
				{showAlert && (
					<div className={`alert ${alertType}`}>{alertMessage}</div>
				)}
			</Portal>

			<Router>
				<Switch>
					<Route exact path='/'>
						<Homepage setIsLoading={setIsLoading} />
					</Route>
					<Route exact path='/admin'>
						<Admin projects={projects} setProjects={setProjects} />
					</Route>
					<Route exact path='/admin/create-project'>
						<CreateProject
							projects={projects}
							setProjects={setProjects}
							displayAlert={displayAlert}
						/>
					</Route>
					<Route exact path='/admin/projects/:slug'>
						<EditProject projects={projects} />
					</Route>
					<Route path='*'>
						<Errorpage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
