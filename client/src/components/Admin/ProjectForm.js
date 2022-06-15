import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import axios from "axios";

const ProjectForm = ({
	type,
	project,
	projects,
	setProjects,
	displayAlert
}) => {
	const [projectImage, setProjectImage] = useState("");
	const createBtn = useRef(null);
	const updateBtn = useRef(null);
	const formContainer = useRef(null);

	const [form, setForm] = useState({
		name: "",
		link: "",
		image: null,
		description: "",
	});



	const handleOnchange = (e) => {
		const name = e.target.name;
		let value = e.target.value;

		if (type === "create") {
			if (name === "image") {
				value = e.target.files[0];
			}
			setForm((values) => ({ ...values, [name]: value }));
		}
	};

	const clearForm = () => {
		setForm({
			name: "",
			link: "",
			image: null,
			description: "",
		});
		formContainer.current.reset();
	};

	const updateDomProjects = (project) => {
		const updatedProjects = [...projects, project];
		setProjects(updatedProjects);
	};

	const createCustomMessage = (type) => {
		let message = '';
		if (type === 'create') {
			message = "project created successfully.";
		} else if (type === 'edit') {
			message = 'project updated successfully'
		}
	}

	const createProject = async (config) => {
		try {
			const res = await axios(config);
			let project = null;

			if (res.data.status === "success") {
				// set success message
				clearForm();
				createBtn.current.disabled = false;

				project = res.data.data.project;
				console.log(project);
				displayAlert(true, "success", 'project created successfully.');
				updateDomProjects(project);
				    
			}
		} catch (error) {
			createBtn.current.disabled = false;
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				displayAlert(true, "error", error.response.data.message);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				displayAlert(true, "error", error.message);
			}
		}
	};

	// create config for axios request
	const createConfig = (method, url, data) => {
		return {
			method: method,
			url: url,
			data,
		};
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData();
		data.append("name", form.name);
		data.append("link", form.link);
		data.append("image", form.image);
		data.append("description", form.description);

		if (type === "create") {
			const method = "POST";
			const url = "http://127.0.0.1:8000/api/v1/projects";
			const config = createConfig(method, url, data);
			createProject(config);
			createBtn.current.disabled = true;
		}
	};

	useEffect(() => {
		if (type === "edit" && project) {
			setForm({
				name: project.name,
				link: project.link,
				description: project.description,
			});
			setProjectImage(project.image.url);
		}
	}, [type, project]);

	return (
		<form
			className='project-form'
			encType='multipart/form-data'
			ref={formContainer}
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				name='name'
				placeholder='name'
				className='form-text-input'
				id='name'
				required
				value={form.name}
				onChange={handleOnchange}
			/>
			<input
				type='text'
				name='link'
				placeholder='link'
				className='form-text-input'
				id='link'
				required
				value={form.link}
				onChange={handleOnchange}
			/>
			<div className='image-group'>
				{projectImage && (
					<div className='img-view'>
						{/* img */}
						<img
							src={projectImage}
							alt={project.name}
							className='project-img-view'
						/>
						{/* delete */}
						<AiOutlineClose className='project-icon del-img' />
					</div>
				)}
				<div className='fileUploadInput'>
					<label className='form-label'>Upload Image</label>
					<input
						type='file'
						id='image'
						name='image'
						accept='image/*'
						required
						onChange={handleOnchange}
					/>
					<button>
						<AiOutlinePlus className='project-icon' />
					</button>
				</div>
			</div>

			<textarea
				name='description'
				id='description'
				cols='30'
				rows='5'
				className='form-text-input'
				placeholder='description'
				required
				value={form.description}
				onChange={handleOnchange}
			></textarea>
			<div className='btns-group'>
				{type === "create" ? (
					<button className='btn btn-primary admin-form-btn' ref={createBtn}>
						Save
					</button>
				) : (
					<button className='btn btn-primary admin-form-btn' ref={updateBtn}>
						update
					</button>
				)}
			</div>
		</form>
	);
};

export default ProjectForm;
