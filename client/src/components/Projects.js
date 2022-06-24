import { FiExternalLink } from 'react-icons/fi';
import { useProjectsContext } from '../contexts/projects_context';
const Projects = () => {

	const { projects } = useProjectsContext();

	const projectList =
		projects.length > 0 ? (
			projects.map((project, i) => {
				const { name, image, link, description } = project;
				return (
					<li
						className={i % 2 === 0 ? "project img-right" : "project img-left"}
						key={i}
					>
						<div className='text-box'>
							<h4 className='project-name'>{name}</h4>
							<p className='project-text'>{description}</p>
							<a
								href={link}
								target='_blank'
								rel='noreferrer noopener'
								className='project-link'
							>
								<FiExternalLink className='icon' />
								<span>Visit</span>
							</a>
						</div>
						<div className='img-box'>
							{project.image && (
								<img
									src={image.url}
									alt={project.name}
									className='project-img'
								/>
							)}
						</div>
					</li>
				);
			})
		) : (
			<p className='nothing'>No projects available at the moment.</p>
		);


	return (
		<section className='projects-section' id='projects'>
			<h1 className='primary-heading projects-heading'>
				<span className='main'>My</span>
				<span className='sub'> Works</span>
			</h1>
			<div className='projects-content'>
				<ul className='projects'>
					{projectList}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
