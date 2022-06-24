import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { useProjectsContext } from "../../contexts/projects_context";

const ProjectForm = ({
	type,
	project,
}) => {
	const createBtn = useRef(null);
	const updateBtn = useRef(null);
	const formContainer = useRef(null);
	const [oldForm, setOldForm] = useState({});

	const {
		handleOnchange,
		updateProject,
		setProjectImage,
		projectImage,
		form,
		setForm,
		uploadImage,
		createProject,
		deleteImageFromCloud,
		clearForm,
	} = useProjectsContext();

	const handleSave = async (e) => {
		e.preventDefault();
		if (type === "create") {
			await createProject(formContainer.current, createBtn.current);
		}
	};

	// update project
	const handleUpdate = async (e) => {
		e.preventDefault();
		if (type === "edit") {
			await updateProject(project._id, oldForm, updateBtn.current);
			updateBtn.current.disabled = true;
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
		} else if (type === 'create') {
			setProjectImage(null);
			clearForm(formContainer.current);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
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
							alt={project && project.name}
							className='project-img-view'
						/>
						{/* delete */}
						<AiOutlineClose
							className='project-icon del-img'
							onClick={() =>
								deleteImageFromCloud(projectImage.cloudinary_id, project._id)
							}
						/>
					</div>
				)}
				{!projectImage && (
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
				)}
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
