import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import useAxios from "../../hooks/useAxios";

const ProjectForm = ({
	type,
	project,
	projects,
	setProjects,
	displayAlert,
}) => {
	const [projectImage, setProjectImage] = useState(null);
	const createBtn = useRef(null);
	const updateBtn = useRef(null);
	const formContainer = useRef(null);
	const { handleRequest } = useAxios(displayAlert);
	const [oldForm, setOldForm] = useState({});

	const [form, setForm] = useState({
		name: "",
		link: "",
		image: null,
		description: "",
	});

	const clearForm = () => {
		setForm({
			name: "",
			link: "",
			image: null,
			description: "",
		});
		formContainer.current.reset();
	};

	// create config for axios request
	const createConfig = (method, url, data, multi) => {
		return {
			method: method,
			url: url,
			data,
			multi,
		};
	};

	const handleOnchange = (e) => {
		const name = e.target.name;
		let value = e.target.value;
		if (name === "image") {
			value = e.target.files[0];
		}
		setForm((values) => ({ ...values, [name]: value }));
	};

	// upload image to cloudinary
	const uploadImage = async () => {
		const config = createConfig(
			"POST",
			"http://127.0.0.1:8000/api/v1/projects/uploadimage",
			{ name: form.name, image: form.image },
			true
		);
		const res = await handleRequest(config);
		if (res) {
			displayAlert(true, "success", "Image uploaded successfully");
			setProjectImage(res.data.data);
		}
	};

	// delete image from cloudinary
	const deleteImageFromCloud = async (cloudinary_id) => {
		const config = createConfig(
			"POST",
			"http://127.0.0.1:8000/api/v1/projects/deleteimage",
			{ public_id: cloudinary_id },
			false
		);
		const res = await handleRequest(config);
		if (res) {
			displayAlert(true, "success", "Image deleted successfully");
			setProjectImage(null);
			deleteImageFromDom(cloudinary_id);
		}
	};

	// delete image from project on the Dom
	const deleteImageFromDom = (cloudinary_id) => {
		projects.map((p) => {
			if (p.image.cloudinary_id === cloudinary_id) {
				p.image = null;
			}
			return p;
		});
	};

	// update dom projects
	const updateDomProjects = (project) => {
		const updatedProjects = [...projects, project];
		setProjects(updatedProjects);
	};

	// create new project
	const createProject = async () => {
		// disable btn
		createBtn.current.disabled = true;
		const config = createConfig(
			"POST",
			"http://127.0.0.1:8000/api/v1/projects",
			{
				name: form.name,
				link: form.link,
				image: projectImage,
				description: form.description,
			},
			false
		);
		const res = await handleRequest(config);
		if (res) {
			displayAlert(true, "success", "Project added successfully");
			const project = res.data.data.project;
			updateDomProjects(project);
			clearForm();
			setProjectImage(null);
			createBtn.current.disabled = false;
		}
	};

	// return keys of object
	const getObjKeys = (obj) => {
		return Object.keys(obj);
	};

	// check if a value is an object
	const isObject = (n) => {
		return Object.prototype.toString.call(n) === "[object Object]";
	};

	// compare old and new form and create an update
	const compareObj = (obj1, obj2, obj = Object.create(null)) => {
		const obj1Keys = getObjKeys(obj1);

		obj1Keys.forEach((key) => {
			if (isObject(obj1) && isObject(obj2)) {
				if (obj1[key] !== obj2[key]) {
					obj[key] = obj2[key];
				} else {
					compareObj(obj1[key], obj2[key], obj);
				}
			}
		});

		return obj;
	};

	// replace edited project on the dom
	const updateProjectOnDom = (project) => {
		console.log(projects);
		const tempProjects = projects.filter((p) => p._id !== project._id);
		const updatedProjects = [...tempProjects || [], project];
		setProjects(updatedProjects);
		console.log(updatedProjects)
	}

	// update project
	const updateProject = async (project_id) => {
		const newForm = compareObj(oldForm, form);
		const config = createConfig(
			"PATCH",
			`http://127.0.0.1:8000/api/v1/projects/${project_id}`,
			{
				name: newForm.name,
				link: newForm.link,
				image: projectImage,
				description: newForm.description,
			},
			false
		);
		const res = await handleRequest(config);
		if (res) {
			displayAlert(true, "success", "Project updated successfully");
			const project = res.data.data.project;
			console.log(res);
			updateProjectOnDom(project);
			setProjectImage(project.image);
			updateBtn.current.disabled = false;
		}
	};

	const handleSave = async (e) => {
		e.preventDefault();
		if (type === "create") {
			await createProject();
			// createBtn.current.disabled = true;
		}
	};

	const handleUpdate = async (e) => {
		e.preventDefault();
		if (type === "edit") {
			await updateProject(project._id);
			// updateBtn.current.disabled = true;
		}
	};

	useEffect(() => {
		if (type === "edit" && project) {
			const tempForm = {
				name: project.name,
				link: project.link,
				image: project.image,
				description: project.description,
			};
			setOldForm(tempForm);
			setForm(tempForm);
			setProjectImage(project.image);
		}
	}, [type, project]);

	return (
		<form
			className='project-form'
			encType='multipart/form-data'
			ref={formContainer}
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
							src={projectImage.url}
							alt={project.name}
							className='project-img-view'
						/>
						{/* delete */}
						<AiOutlineClose
							className='project-icon del-img'
							onClick={() => deleteImageFromCloud(projectImage.cloudinary_id)}
						/>
					</div>
				)}
				<div className='upload-container'>
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
							<AiOutlinePlus type='button' className='project-icon' />
						</button>
					</div>
					<button type='button' className='upload-btn' onClick={uploadImage}>
						Upload Image
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
					<button
						className='btn btn-primary admin-form-btn'
						ref={createBtn}
						type='submit'
						onClick={handleSave}
					>
						Save
					</button>
				) : (
					<button
						className='btn btn-primary admin-form-btn'
						ref={updateBtn}
						type='submit'
						onClick={handleUpdate}
					>
						update
					</button>
				)}
			</div>
		</form>
	);
};

export default ProjectForm;
