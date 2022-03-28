import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./navBar.css";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
	const [show, setShow] = useState(false);

	return (
		<>
			<nav className="navbar">
				<button className="burguer-btn" onClick={() => setShow(!show)}>
					<FaBars />
				</button>
			</nav>
			<NavLinks
				showCss={show ? "show-nav" : ""}
				setShow={setShow}
				show={show}
			/>
		</>
	);
};

export default Navbar;
