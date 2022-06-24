import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/projects_reducer';
import axios from "axios";
// import handleRequest from '../hooks/useAxios';
import { CLEAR_FORM, CREATE_PROJECT, DELETE_PROJECT, DELETE_PROJECT_IMAGE, GET_PROJECTS_BEGINS, GET_PROJECTS_ERROR, GET_PROJECTS_SUCCESS, HIDE_ALERT, SET_FORM, SET_PROJECT_IMAGE, SHOW_ALERT, UPDATE_FORM, UPDATE_PROJECT } from '../Actions';
import { compareObj } from '../utils/compareObj';

const ProjectsContext = createContext();

const initialState = {
	projects: [],
	isLoading: false,
	isError: false,
	showAlert: false,
	alertType: "",
	alertMessage: "",
	form: {
		name: "",
		link: "",
		image: null,
		description: "",
	},
	projectImage: null,
};

export const ProjectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState); 
  
  const handleRequest = async (config) => {
		const content = config.multi
			? { "Content-Type": "multipart/form-data" }
			: "";
			try {
				const res = await axios({
					method: config.method,
					url: config.url,
					data: config.data,
					headers: content,
				});
        return res;
      } catch (error) {
				if (error.response) {
					displayAlert("error", error.response.data.message);
					console.log(error);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log(error);
					console.log("Error", error.message);
					displayAlert("error", error.message);
				}
			}
		};

	const clearForm = (form) => {
		dispatch({ type: CLEAR_FORM });
		form.reset();
	};

	useEffect(() => {
		// Get projects when component mounts
		const getProjects = async () => {
			try {
				dispatch({ type: GET_PROJECTS_BEGINS });
				const res = await axios.get("http://127.0.0.1:8000/api/v1/projects");
				let tempProjects = [];
				if (res.data.status === "success") {
					tempProjects = res.data.data.projects;
					dispatch({ type: GET_PROJECTS_SUCCESS, payload: tempProjects });
				}
			} catch (error) {
				dispatch({ type: GET_PROJECTS_ERROR });
			}
		};
		getProjects();
	}, []);

	// display alert
	const displayAlert = (type, message) => {
		dispatch({ type: SHOW_ALERT, payload: { type, message } });
	};

	// clear alert
	useEffect(() => {
		const alertTime = setTimeout(() => {
			dispatch({ type: HIDE_ALERT });
		}, 5000);

		return () => {
			clearTimeout(alertTime);
		};
	}, [state.showAlert]);

	// handle on change event on form
	const handleOnchange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		if (name === "image") {
			value = e.target.files[0];
		}
		dispatch({ type: SET_FORM, payload: { name, value } });
	};

	// set form for edit
	const setForm = (form) => {
		dispatch({ type: UPDATE_FORM, payload: form });
	};

	// create config
	const createConfig = (method, url, data, multi) => {
		return {
			method: method,
			url: url,
			data,
			multi,
		};
	};

	// update project on the dom : state
	const updateProjectOnDom = (project) => {
		dispatch({ type: UPDATE_PROJECT, payload: project });
	};

	// set project image to display on dom during update
	const setProjectImage = (image) => {
		dispatch({ type: SET_PROJECT_IMAGE, payload: image });
	};

	// add new project to dom projects
  const addProjectToDom = (project) => {
    dispatch({ type: CREATE_PROJECT, payload: project})
	};

  // ============================
	// create new project
  // ============================
	const createProject = async (form, btn) => {
		// disable btn
	  btn.disabled = true;
		const config = createConfig(
			"POST",
			"http://127.0.0.1:8000/api/v1/projects",
			{
				name: state.form.name,
				link: state.form.link,
				image: state.projectImage,
				description: state.form.description,
			},
			false
		);
		const res = await handleRequest(config);
		if (res) {
			displayAlert("success", "Project added successfully");
			const project = res.data.data.project;
			addProjectToDom(project);
			clearForm(form);
			setProjectImage(null);
			btn.disabled = false;
		}
	};

  // =============================
	// update project
  // =============================
  const updateProject = async (project_id, oldForm, btn) => {
    btn.disabled = true;
		const newForm = compareObj(oldForm, state.form);
		const config = createConfig(
			"PATCH",
			`http://127.0.0.1:8000/api/v1/projects/${project_id}`,
			{
				name: newForm.name,
				link: newForm.link,
				image: state.projectImage,
				description: newForm.description,
			},
			false
		);
		const res = await handleRequest(config);
		if (res) {
			displayAlert("success", "Project updated successfully");
			const project = res.data.data.project;
			updateProjectOnDom(project);
			setProjectImage(project.image);
			btn.disabled = false;
		}
	};

	// delete project from Dom : state
	const deleteDomProject = (project_id) => {
		dispatch({ type: DELETE_PROJECT, payload: project_id });
	};

	// delete image from project on the Dom
	const deleteImageFromDom = (cloudinary_id) => {
		dispatch({ type: DELETE_PROJECT_IMAGE, payload: cloudinary_id });
	};

  // delete image from database
  const deleteImageFromDb = async (project_id) => {
    const config = createConfig(
			"PATCH",
			`http://127.0.0.1:8000/api/v1/projects/${project_id}`,
			{
				image: null,
			},
			false
		);
		const res = await handleRequest(config);
  }

	// delete image from cloudinary
	const deleteImageFromCloud = async (cloudinary_id, project_id) => {
		const config = createConfig(
			"POST",
			"http://127.0.0.1:8000/api/v1/projects/deleteimage",
			{ public_id: cloudinary_id },
			false
		);

    const res = await handleRequest(config);
    const res2 = await deleteImageFromDb(project_id);
    if (res) {
      deleteImageFromDom(cloudinary_id);
      setProjectImage(null);
      displayAlert("success", "Image deleted successfully");
		}
	};

  // ===============================
	// deleteProject
  // ===============================
	const deleteProject = async (project_id) => {
		const config = createConfig(
			"DELETE",
			`http://127.0.0.1:8000/api/v1/projects/${project_id}`,
			{},
			false
		);
		const project = state.projects.find((p) => p._id === project_id);
		const res = await handleRequest(config);
		const res2 = await deleteImageFromCloud(project.image.cloudinary_id);
		if (res) {
			displayAlert("success", "Project deleted successfully");
			deleteDomProject(project_id);
		}
	};

	// upload image to cloudinary
	const uploadImage = async () => {
		const config = createConfig(
			"POST",
			"http://127.0.0.1:8000/api/v1/projects/uploadimage",
			{ name: state.form.name, image: state.form.image },
			true
		);
		const res = await handleRequest(config);
		if (res) {
			displayAlert(true, "success", "Image uploaded successfully");
      setProjectImage(res.data.data);
		}
	};

	return (
		<ProjectsContext.Provider
			value={{
				...state,
				displayAlert,
				updateProject,
				deleteProject,
				handleOnchange,
				setProjectImage,
				setForm,
				uploadImage,
				createProject,
				deleteImageFromCloud,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
}

export const useProjectsContext = () => {
  return useContext(ProjectsContext);
}