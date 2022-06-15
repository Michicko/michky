import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectForm from "../../components/Admin/ProjectForm";
import Topbar from "../../components/Admin/Topbar";

const EditProject = ({ projects }) => {
	const { slug } = useParams();
	const [title, setTitle] = useState("");
	const [project, setProject] = useState(null);

	const findProject = useCallback(
		(slug) => {
			const tempProject = projects.find((p) => p.slug === slug);
			if (tempProject) {
				setProject(tempProject);
				setTitle(tempProject.name);
			}
		},
		[projects]
	);

	useEffect(() => {
		findProject(slug);
	}, [slug, findProject]);

	return (
		<div className='admin-page'>
			<Topbar title={`Edit ${title}`} />
			<div className='page-container'>
				<div className='page-top'>
					<Link to='/admin' className='btn btn-primary'>
						Back to projects
					</Link>
				</div>
				<main className='page-main'>
					<ProjectForm type='edit' project={project} projects={projects} />
				</main>
			</div>
		</div>
	);
};

export default EditProject;
