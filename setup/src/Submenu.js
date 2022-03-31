import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
	const { isSubmenuOpen, pagePosition, pageCurrent } = useGlobalContext();
	const [columns, setColumns] = useState(2);
	const submenuRef = useRef(null);
	const { pageBottom, pageCenter } = pagePosition;
	const { page, links } = pageCurrent;

	useEffect(() => {
		setColumns(2);
		submenuRef.current.style.left = pageCenter + "px";
		submenuRef.current.style.top = pageBottom - 3 + "px";
		setColumns(links.length);
	}, [pagePosition, links]);
	return (
		<aside
			className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
			ref={submenuRef}
		>
			<h4>{page}</h4>
			<div className={`submenu-center col-${columns}`}>
				{links.map((link, index) => {
					const { label, icon, url } = link;
					return (
						<a href={url} key={index}>
							{icon}
							{label}
						</a>
					);
				})}
			</div>
		</aside>
	);
};

export default Submenu;
