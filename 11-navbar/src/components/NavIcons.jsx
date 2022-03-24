import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const NavIcons = () => {
	return (
		<div className="nav-icons-container">
			<FaFacebook className="nav-icon" />
			<FaInstagram className="nav-icon" />
			<FaLinkedin className="nav-icon" />
			<FaGithub className="nav-icon" />
		</div>
	);
};

export default NavIcons;
