import React, { useEffect, useRef, useState } from "react";
import "./subMenuLinks.css";
import { useGlobalContext } from "../../context";

const SubmenuLinks = () => {
	const { isSubmenuOpen, submenuData, submenuLinks } = useGlobalContext();
	const submenuContainerRef = useRef("");
	const { text, height, center } = submenuData;
	const { submenu } = submenuLinks;
	const [colNumber, setColNumber] = useState("1");

	useEffect(() => {
		const submenuContainer = submenuContainerRef.current;
		submenuContainer.style.top = height + "px";
		submenuContainer.style.left = center + "px";
		submenu.length === 2 && setColNumber("2");
		submenu.length >= 3 && setColNumber("3");
	}, [isSubmenuOpen, height, center, submenu]);
	return (
		<div
			className={`submenu-container ${isSubmenuOpen ? "show-submenu" : ""}`}
			ref={submenuContainerRef}
		>
			<h4>{text}</h4>
			<div className={`sublinks-container sublinks-col-${colNumber}`}>
				{submenu.map((link, index) => {
					const { icon, url, name } = link;
					return (
						<a href={url} key={index}>
							<p className="sublink">
								{icon}
								{name}
							</p>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default SubmenuLinks;
