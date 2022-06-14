import { Link } from 'react-scroll';

const NavLink = ({ navlink, setIsChecked, navCheck }) => {

	const handleClick = (e) => {
		setIsChecked(false);
		navCheck.current.checked = false;
	}

	return (
		<Link
			activeClass='active'
			className='navigation-link'
			to={navlink}
			spy={true}
			smooth={true}
      duration={1500}
      delay={100}
			onClick={handleClick}
		>
			{navlink}
		</Link>
	);
};
 
export default NavLink;