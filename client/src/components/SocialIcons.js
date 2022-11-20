import socials from "../utils/socials";

const SocialIcons = () => {
	return (
		<div className='socials'>
			{socials.map((social, i) => {
				const { link, icon } = social;
				return (
					<a
						href={link}
						target='_blank'
						rel='noreferrer'
						className='social-link'
						key={i}
					>
						{icon}
					</a>
				);
			})}
		</div>
	);
};

export default SocialIcons;
