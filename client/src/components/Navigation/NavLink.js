import { Link } from 'react-scroll';

const NavLink = ({ navlink, setIsChecked, navCheck }) => {
  
  const handleSetActive = () => {
    navCheck.current.checked = false;
    setIsChecked(false);
	};

	return (
		<Link
			activeClass='active'
			className='navigation-link'
			to={navlink}
			spy={true}
			smooth={true}
      duration={1500}
      delay={100}
			onSetActive={handleSetActive}
		>
			{navlink}
		</Link>
	);
};
 
export default NavLink;