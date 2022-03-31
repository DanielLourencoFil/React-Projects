import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

	const displaySubmenu = (e) => {
		const pageText = e.target.textContent;
		const page = e.target.getBoundingClientRect();
		const pageCenter = (page.left + page.right) / 2;
		const pageBottom = page.bottom;
		console.log(page.left + page.width);
		openSubmenu(pageText, { pageBottom, pageCenter });
	};
	const handleSubmenu = (e) => {
		if (!e.target.classList.contains("link-btn")) {
			closeSubmenu();
		}
	};
	return (
		<nav className="nav" onMouseOver={(e) => handleSubmenu(e)}>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} alt="stripe" className="nav-logo" />
					<button
						type="submit"
						className="btn toggle-btn"
						onClick={openSidebar}
					>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
							products
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
							developers
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={(e) => displaySubmenu(e)}>
							company
						</button>
					</li>
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
