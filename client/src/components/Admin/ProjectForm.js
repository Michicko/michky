import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
const ProjectForm = ({ type, project }) => {
	const [projectImage, setProjectImage] = useState("");
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

  const handleSubmit = (e) => {  
    e.preventDefault();
    console.log(type);
    console.log(form);
  }
  
  useEffect(() => {
    if (type === 'edit' && project) {
      setForm({
        name: project.name,
        link: project.link,
        description: project.description,
      });
      setProjectImage(project.image.url);
    }
  }, [type, project]);

	return (
		<form className='project-form' onSubmit={handleSubmit}>
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
					<button className='btn btn-primary admin-form-btn'>Save</button>
				) : (
					<button className='btn btn-primary admin-form-btn'>update</button>
				)}
			</div>
		</form>
	);
};

export default ProjectForm;
