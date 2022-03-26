import Logo01 from "./components/Logo01";
import NavIcons from "./components/NavIcons";
import { FaBars } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import NavLinks from "./components/NavLinks";

function Navbar() {
	const [showNav, setShowNav] = useState(false);
	const refNavbar = useRef(null);

	console.log(
		document.querySelector(".nav-links-small").getBoundingClientRect().height
	);
	const showNavbar = () => {
		setShowNav(!showNav);
	};
	return (
		<>
			<nav className={`navbar ${showNav && "show-nav"}`} ref={refNavbar}>
				<div className="navbar-center">
					<Logo01 />
					<NavLinks css={"nav-links-large"} />
					<NavIcons />
					<FaBars className="burguer-menu-icon" onClick={showNavbar} />
				</div>
				<NavLinks css={`nav-links-small`} />
			</nav>
		</>
	);
}

export default Navbar;
