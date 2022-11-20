import SocialIcons from "./SocialIcons"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
		<footer className='footer'>
			<div className='footer-content'>
				<Link to='/admin' className='footer-admin-btn'>
					-
				</Link>
				<div className='footer-socials'>
					<SocialIcons />
				</div>
				<div className='footer-copy'>
					<p>&copy; Michicko. {new Date().getFullYear()} </p>
				</div>
			</div>
		</footer>
	);
}
 
export default Footer;