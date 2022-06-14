import skills from '../utils/skills';

const About = () => {
  return (
		<>
			<section className='about-section' id='about'>
				<h1 className='primary-heading about-heading'>
					<span className='main'>About</span>
					<span className='sub'> Me</span>
				</h1>
				<div className='about-content'>
					<div className='about-description'>
						<p className='about-text'>
							Hi, i'm passionate about bringing ideas to reality through codes. I
							create responsive websites that are fast, easy to use and built
							with best practices.
						</p>
						<p className='about-text'>
							I'm always working on improving my skills one code at a time. 
						</p>
						<p className='about-text'>
							Interested in working together, feel free to contact me for any
							projects or collaborations.
						</p>
					</div>
          <div className='about-skills'>
            <h5 className="about-sm-heading">
              These are some of the tools i use...
            </h5>
            <ul className="about-skills">
              {skills.map((skill, i) => {
                return <li className="about-skill" key={i}>
                  {skill}
                </li>
              })}
            </ul>
          </div>
				</div>
			</section>
		</>
	);
}
 
export default About;