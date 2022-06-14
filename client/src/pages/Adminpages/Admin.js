import Topbar from "../../components/Admin/Topbar";
import { Link } from "react-router-dom";
import AdminProject from "../../components/Admin/AdminProject";

const Admin = ({ projects, setProjects }) => {

	const deleteProject = (_id) => {
		const tempProjects = projects.filter((project) => project._id !== _id);
		setProjects(tempProjects);
	};

	return (
		<div className='admin-page'>
			<Topbar title='Projects' />
			<div className='page-container'>
				<div className='page-top'>
					<Link to='/' className='btn btn-primary'>
						Back home
					</Link>
					<Link to='/admin/create-project' className='btn btn-primary'>
						Add project
					</Link>
				</div>
				<div className='page-content'>
					<div className='projects-box'>
						<ul className='admin-projects'>
							{projects.map((project, i) => {
								return (
									<AdminProject
										key={i}
										project={project}
										deleteProject={deleteProject}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
