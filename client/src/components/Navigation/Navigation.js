const Navigation = () => {
	return (
		<div className='navigation'>
			<input type='checkbox' id='navi-toggle' className='navigation-checkbox' />
			<label htmlFor='navi-toggle' className='navigation-btn'></label>
			<div className='navigation-bg'>&nbsp;</div>

			<nav className='navigation-nav'></nav>
		</div>
	);
};

export default Navigation;
