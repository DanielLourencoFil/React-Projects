import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="section-center nav-center">
				<div className="logo">
					<p className="logo-text">
						The<span className="logo-text-especial">Cocktail</span>DB
					</p>
				</div>
				<div className="navlinks">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`${isActive ? "navlink-active navlink" : "navlink"}`
						}
					>
						Home
					</NavLink>
					<NavLink
						to="about"
						className={({ isActive }) =>
							`${isActive ? "navlink-active navlink" : "navlink"}`
						}
					>
						About
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
