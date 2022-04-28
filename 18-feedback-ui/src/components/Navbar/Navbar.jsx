import React from "react";
import "./Navbar.css";
import DarkModeSwitcher from "../DarkModeSwitcher/DarkModeSwitcher";

const Navbar = () => {
	return (
		<div className="navbar">
			<h1>feedback UI</h1>
			<DarkModeSwitcher />
		</div>
	);
};

export default Navbar;
