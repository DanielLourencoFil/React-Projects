import React, { useState } from "react";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa";
import "./navBar.css";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className="nav-container" id="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Logo />
					<FaBars className="burguer-icon" onClick={() => setToggle(!toggle)} />
				</div>
				<div className={`nav-footer ${toggle ? "show-container" : ""}`}>
					<NavLinks />
					<SocialIcons />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
