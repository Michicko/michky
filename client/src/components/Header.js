import socials from '../utils/socials';

const Header = () => {
  return (
		<div className='header'>
      <div className='header-content'>
        <h1 className="primary-heading header-heading">Hi!</h1>
				<div className='header-circle'>
					<div className='header-outer-circle'>
            <div className='header-inner-circle'>
              <div className="header-inner-content">
                <p className="header-lead">My Name is</p>
                <h2 className='header-main-heading'>Michael</h2>
                <h3 className='header-title'>I'm a Frontend Developer.</h3>
              </div>
            </div>
					</div>
        </div>
        <div className="header-socials">
          {socials.map((social, i) => {
            const { link, icon } = social;
            return (
							<a
								href={link}
								target='_blank'
								rel='noreferrer'
								className='header-link'
								key={i}
							>
								{icon}
							</a>
						);
          })}
          
        </div>
			</div>
		</div>
	);
}

export default Header;