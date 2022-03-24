import Logo01 from "./components/Logo01";
import NavIcons from "./components/NavIcons";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
	const [showNav, setShowNav] = useState(false);
	const showNavbar = () => {
		setShowNav(!showNav);
	};
	return (
		<>
			<nav className={`navbar ${showNav && "show-nav"}`}>
				<div className="navbar-center">
					<Logo01 />
					<Links css={"nav-links-large"} />
					<NavIcons />
					<FaBars className="burguer-menu-icon" onClick={showNavbar} />
				</div>
				<Links css={`nav-links-small`} />
			</nav>
		</>
	);
}
const Links = ({ css }) => {
	return (
		<ul className={css}>
			<a href="home.html">
				<li className="nav-links-item">Home</li>
			</a>
			<a href="about.html">
				<li className="nav-links-item">About</li>
			</a>

			<a href="projects.html">
				<li className="nav-links-item">Projects</li>
			</a>
			<a href="profile.html">
				<li className="nav-links-item">Profile</li>
			</a>
			<a href="contact.html">
				<li className="nav-links-item">Contact</li>
			</a>
		</ul>
	);
};
export default Navbar;
