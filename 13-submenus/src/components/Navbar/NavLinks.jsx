import React, { useState, useRef, useEffect } from "react";
import { dataSubmenu } from "../../data";
import { useGlobalContext } from "../../context";
import "./NavLinks.css";

const NavLinks = () => {
	const { isSubmenuOpen, submenuOpen, closeSubmenu } = useGlobalContext();

	const handleSubmenuOpen = (e) => {
		const menuLinkText = e.target.textContent;
		const menuLink = e.target.getBoundingClientRect();
		const menuLinkHeight = menuLink.height + 18;
		const menuLinkCenter = (menuLink.left + menuLink.right) / 2;
		submenuOpen(true, {
			text: menuLinkText,
			height: menuLinkHeight,
			center: menuLinkCenter,
		});
	};
	return (
		<ul className="navbar-links-container">
			{dataSubmenu.map((submenu, index) => {
				return (
					<li
						key={index}
						className="menu-link-btn"
						onMouseOver={handleSubmenuOpen}
					>
						{submenu.menu}
					</li>
				);
			})}
		</ul>
	);
};

export default NavLinks;
