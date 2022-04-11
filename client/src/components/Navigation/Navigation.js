import { usePageContext } from "../../contexts/page_context";
import { BiMenuAltRight } from 'react-icons/bi';
import logo from '../../assets/images/logo.png';
import NavigationMenu from "./NavigationMenu";

const Navigation = () => {
  const { is_nav_menu_opened } = usePageContext();

  return (
		<div className='navbar'>
			<nav className='nav'>
        {/* logo */}
        <img src={logo} alt="Michky logo" className="nav-logo" />

				{/* nav menu btn */}
				{!is_nav_menu_opened && (
					<button className='nav-btn' type='button'>
						<BiMenuAltRight className='nav-icon' />
					</button>
				)}
			</nav>

      {/* navmenu */}
      <NavigationMenu/>
		</div>
	);
}
 

export default Navigation;