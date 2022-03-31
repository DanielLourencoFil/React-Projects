import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./socialIcons.css";

const SocialIcons = () => {
	return (
		<div className="social-icons-container">
			<a href="https://github.com/DanielLourencoFil">
				<FaGithub className="social-icon" />
			</a>
			<a href="https://www.linkedin.com/in/daniel-louren%C3%A7o-dev/">
				<FaLinkedin className="social-icon" />
			</a>
		</div>
	);
};

export default SocialIcons;
