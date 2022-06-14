import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit } from "react-icons/fi";
import { Link } from 'react-router-dom';

const AdminProject = ({ project, deleteProject }) => {
	const { _id, name, slug } = project;
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