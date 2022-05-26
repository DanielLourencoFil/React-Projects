import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./navBar.css";
import { BurguerBtn } from "../common/common";
const NavBar = ({ setIsAbout, setShowProjectsBtn }) => {
	const [toggle, setToggle] = useState(false);
	const [hideNavbar, setHideNavbar] = useState(false);
	useEffect(() => {
		let timeout;
		const event = window.addEventListener("scroll", (e) => {
			clearTimeout(timeout);
			setHideNavbar(true);
			timeout = setTimeout(() => {
				setHideNavbar(false);
				console.log("yes");
			}, 500);

			return () => window.removeEventListener("scroll", event);
		});
	}, []);

	const handleLink = (link) => {
		setToggle(false);
		if (link === "home") {
			setIsAbout(false);
			setShowProjectsBtn(false);
		}
		if (link === "about") {
			setIsAbout(true);
			setShowProjectsBtn(false);
		}
		if (link === "about-mobile") {
			setIsAbout(false);
			setShowProjectsBtn(false);
		}
		if (link === "skills") {
			setIsAbout(false);
			setShowProjectsBtn(false);
		}
		if (link === "contact") {
			setIsAbout(false);
			setShowProjectsBtn(false);
		}
	};
	return (
		<nav
			className={`nav-container ${toggle && "show-nav"} ${
				hideNavbar && "hide-navbar"
			}`}
			id="navbar"
		>
			<BurguerBtn cb={setToggle} value={toggle} />
			<div className={`nav-center  ${toggle && "show-nav"}`}>
				<ul className="navlinks-container">
					<Link to="/">
						<li className="navlinks" onClick={() => handleLink("home")}>
							Home
						</li>
					</Link>
					<Link to="/" className="big-screen">
						<li className="navlinks" onClick={() => handleLink("about")}>
							About
						</li>
					</Link>

					<a href="#landing-photo-section" className="mobile">
						<li className="navlinks" onClick={() => handleLink("about-mobile")}>
							About
						</li>
					</a>
					<a href="#skills">
						<li className="navlinks" onClick={() => handleLink("skills")}>
							Skills
						</li>
					</a>

					<Link to="/react-projects">
						<li className="navlinks" onClick={() => setToggle(false)}>
							React Js Projects
						</li>
					</Link>
					<Link to="/vanilla-js-projects">
						<li className="navlinks" onClick={() => setToggle(false)}>
							Vanilla Js Projects
						</li>
					</Link>
					<Link to="/contact">
						<li className="navlinks" onClick={() => handleLink("contact")}>
							Contact
						</li>
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
