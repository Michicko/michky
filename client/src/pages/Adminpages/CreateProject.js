import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectForm from "../../components/Admin/ProjectForm";
import Topbar from "../../components/Admin/Topbar";

const CreateProject = ({ projects, setProjects }) => {
	const [project, setProject] = useState({
		name: "",
		link: "",
		image: null,
		description: "",
	});

	return (
		<div className='admin-page'>
			<Topbar title='Create Project' />

			<div className='page-container'>
				<div className='page-top'>
					<Link to='/admin' className='btn btn-primary'>
						Back to projects
					</Link>
				</div>
				<main className='page-main'>
					<ProjectForm
						type='create'
						project={project}
						projects={projects}
						setProjects={setProjects}
					/>
				</main>
			</div>
		</div>
	);
};

export default CreateProject;
