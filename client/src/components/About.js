import skills from '../utils/skills';

const About = () => {
  return (
		<>
			<section className='about-section' id='about'>
				<h2 className='primary-heading about-heading'>
					<span className='main'>About</span>
					<span className='sub'> Me</span>
				</h2>
				<div className='about-content'>
					<div className='about-description'>
						<p className='about-text'>
						Hi! I create responsive websites that are fast, easy
							to use, built with best practices using mostly Nodejs, JavaScript
							and React. I'm passionate about bringing ideas to reality through
							codes.
						</p>
						<p className='about-text'>
							I have an aptitude for learning new technologies, and a proven
							track record of meeting set goals and i'm always working on
							improving my skills one code at a time.
						</p>
						<p className='about-text'>
							Interested in working together, feel free to contact me for any
							projects or collaborations.
						</p>
					</div>
					<div className='about-skills'>
						<h5 className='about-sm-heading'>
							These are some of the tools i use...
						</h5>
						<ul className='about-skills'>
							{skills.map((skill, i) => {
								return (
									<li className='about-skill' key={i}>
										{skill}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
 
export default About;