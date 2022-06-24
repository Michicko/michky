import {
	CLEAR_FORM,
	CREATE_PROJECT,
	DELETE_PROJECT,
	DELETE_PROJECT_IMAGE,
	GET_PROJECTS_BEGINS,
	GET_PROJECTS_ERROR,
	GET_PROJECTS_SUCCESS,
	HIDE_ALERT,
	SET_FORM,
	SET_PROJECT_IMAGE,
	SHOW_ALERT,
	UPDATE_FORM,
	UPDATE_PROJECT,
} from "../Actions";

const ProjectsReducer = (state, action) => {
	if (action.type === GET_PROJECTS_BEGINS) {
		return { ...state, isLoading: true };
	}

	if (action.type === GET_PROJECTS_SUCCESS) {
		const projects = action.payload;
		return { ...state, isLoading: false, projects };
	}

	if (action.type === GET_PROJECTS_ERROR) {
		return { ...state, isLoading: false, isError: true };
	}

	if (action.type === SHOW_ALERT) {
		const { type, message } = action.payload;
		return {
			...state,
			showAlert: true,
			alertType: type,
			alertMessage: message,
		};
	}

	if (action.type === HIDE_ALERT) {
		return { ...state, showAlert: false };
	}

	if (action.type === DELETE_PROJECT) {
		const project_id  = action.payload;
		const projects = state.projects.filter((p) => p._id !== project_id);
		return { ...state, projects };
	}

	if (action.type === UPDATE_PROJECT) {
		const project = action.payload;
		const projects = state.projects.filter((p) => p._id !== project._id);
		const updatedProjects = [...(projects || []), project];
		return { ...state, projects: updatedProjects };
	}

	if (action.type === SET_FORM) {
		const { name, value } = action.payload;
		return { ...state, form: { ...state.form, [name]: value } };
	}
	if (action.type === CLEAR_FORM) {
		return {
			...state,
			form: { name: "", link: "", image: null, description: "" },
		};
	}

	if (action.type === SET_PROJECT_IMAGE) {
    const image  = action.payload;
		return { ...state, projectImage: image };
	}

	if (action.type === UPDATE_FORM) {
    const form = action.payload;
		return {
			...state,
			form: {
				name: form.name,
				link: form.link,
				image: form.image,
				description: form.description,
			},
		};
	}

	if (action.type === DELETE_PROJECT_IMAGE) {
		const cloudinary_id  = action.payload;
		const projects = state.projects.map((p) => {
			if (p.image.cloudinary_id === cloudinary_id) {
				p.image = null;
			}
			return p;
    });
    
    return { ...state, projects };
  }
  
  if (action.type === CREATE_PROJECT) {
    const project = action.payload;
    return { ...state, projects: [...state.projects, project] };
  }

	return `No matching action ${action.type} type`;
};

export default ProjectsReducer;
