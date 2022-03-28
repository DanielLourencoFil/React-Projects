import React from "react";
import { navLinksData } from "./navLinksData";
import NavIcons from "../socialIcons/NavIcons";
import "./navLinks.css";
import { FaTimes } from "react-icons/fa";
import Logo from "../logo/Logo";

const NavLinks = ({ showCss, setShow, show }) => {
	return (
		<div className={`sidebar-modal ${showCss}`}>
			<div className="sidebar-header">
				<Logo />
				<FaTimes className="close-btn" onClick={() => setShow(!show)} />
			</div>
			<ul className="navbar-links-container">
				{navLinksData.map((item, index) => {
					const { name, icon, href } = item;
					return (
						<a href={href} key={index}>
							<li className="nav-links-item">
								{icon}
								{name}
							</li>
						</a>
					);
				})}
			</ul>
			<NavIcons />
		</div>
	);
};

export default NavLinks;
