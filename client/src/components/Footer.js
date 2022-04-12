import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
		<footer className='footer'>
			<div className='footer-content'>
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