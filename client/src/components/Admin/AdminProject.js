import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const AdminProject = ({ project, projects, setProjects, displayAlert }) => {
	const { _id, name, slug } = project;
	const { handleRequest } = useAxios();

	// create config
	const createConfig = (method, url, data, multi) => {
		return {
			method: method,
			url: url,
			data,
			multi,
		};
	};

	// update dom projects
	const deleteDomProject = (project_id) => {
		const tempProjects = projects.filter((p) => p._id !== project_id);
		setProjects(tempProjects);
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
	};

	// deleteProject
	const deleteProject = async (project_id) => {
		const config = createConfig(
			"DELETE",
			`http://127.0.0.1:8000/api/v1/projects/${project_id}`,
			{},
			false
		);
		const res = await handleRequest(config);
		const res2 = await deleteImageFromCloud(project.image.cloudinary_id)
		if (res) {
			displayAlert(true, "success", "Project deleted successfully");
			deleteDomProject(project_id);
		}
	};

	return (
		<li className='admin-project' data-id={_id}>
			<p className='name'>{name}</p>
			<div className='project-ctrls'>
				<Link to={`/admin/projects/${slug}`}>
					<FiEdit className='project-icon edit' />
				</Link>

				<AiOutlineClose
					className='project-icon delete'
					onClick={() => deleteProject(_id)}
				/>
			</div>
		</li>
	);
};

export default AdminProject;
