import Topbar from "../../components/Admin/Topbar";
import { Link } from "react-router-dom";
import AdminProject from "../../components/Admin/AdminProject";
import { useProjectsContext } from "../../contexts/projects_context";

const Admin = () => {
	const { projects } = useProjectsContext();

	const projectList =
		projects.length > 0 ? (
			projects.map((project, i) => {
				return <AdminProject key={i} project={project} />;
			})
		) : (
			<p className='nothing'>No projects available at the moment.</p>
		);
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
							{projectList}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
