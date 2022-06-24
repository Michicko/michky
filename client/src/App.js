import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./pages/Adminpages/Admin";
import Loader from "./components/Loader";
import Errorpage from "./pages/Errorpage";
import Homepage from "./pages/Homepage/Homepage";
import CreateProject from "./pages/Adminpages/CreateProject";
import EditProject from "./pages/Adminpages/EditProject";
import Portal from "./Portal";
import { useProjectsContext } from "./contexts/projects_context";
import Error from "./components/Error";

function App() {
	const { isLoading, isError, showAlert, alertType, alertMessage } =
		useProjectsContext();

	if (isLoading) {
		return <Loader />;
	}

	if (isError) {
		return (
			<Error/>
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
						<Homepage />
					</Route>
					<Route exact path='/admin'>
						<Admin />
					</Route>
					<Route exact path='/admin/create-project'>
						<CreateProject />
					</Route>
					<Route exact path='/admin/projects/:slug'>
						<EditProject />
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
