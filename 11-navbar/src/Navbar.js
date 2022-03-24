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
			<li>
				<a href="#">Home</a>
			</li>
			<li>
				<a href="#">About</a>
			</li>
			<li>
				<a href="#">Projects</a>
			</li>
			<li>
				<a href="#">Profile</a>
			</li>
			<li>
				<a href="#">Contact</a>
			</li>
		</ul>
	);
};
export default Navbar;
