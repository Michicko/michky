import { useEffect, useRef, useState } from "react";
import navlinks from "../../utils/navlinks";
import NavLink from "./NavLink";

const Navigation = () => {
	const [isChecked, setIsChecked] = useState(false);
	const navCheck = useRef(null);

	// hide overflow when nav opened
	const checkChecked = (e) => {
		if (e.target.checked) {
			setIsChecked(true);
		} else {
			setIsChecked(false);
		}
	};

	useEffect(() => {
		if (isChecked) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isChecked]);

	return (
		<div className='navigation'>
			<input
				type='checkbox'
				id='navi-toggle'
				className='navigation-checkbox'
				ref={navCheck}
				onChange={checkChecked}
			/>
			<label htmlFor='navi-toggle' className='navigation-btn'>
				<span className='navigation-icon'></span>
			</label>
			<div className='navigation-bg'>&nbsp;</div>

			<nav className='navigation-nav'>
				<ul className='navigation-list'>
					{navlinks.map((navlink, i) => {
						return (
							<li className='navigation-item' key={i}>
								<NavLink
									navlink={navlink}
									setIsChecked={setIsChecked}
									navCheck={navCheck}
								/>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
