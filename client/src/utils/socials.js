import React from 'react';
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

const socials = [
	{
		icon: <AiFillGithub className='icon header-icon' />,
		link: "https://github.com/Michicko",
	},
	{
		icon: <AiOutlineTwitter className='icon header-icon' />,
		link: "https://twitter.com/Michky__",
	},
	{
		icon: <RiLinkedinFill className='icon header-icon' />,
		link: "https://www.linkedin.com/in/michky81/",
	},
];


export default socials;