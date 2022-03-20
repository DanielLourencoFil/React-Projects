import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
	const [menuSelection, setMenuSelection] = useState("all");

	const getUniqueCategories = () => {
		let uniqueCategories = ["all"];
		menu.filter((item) => {
			let i = uniqueCategories.indexOf(item.category);
			if (i === -1) uniqueCategories.push(item.category);
		});
		return uniqueCategories;
	};
	const setMenuCategories = () => {
		let selection = [];
		if (menuSelection === "all") {
			console.log(menu);
			return menu;
		} else {
			menu.filter((item) => {
				if (item.category == menuSelection) selection.push(item);
			});
			console.log(selection);
		}
		return selection;
	};

	return (
		<section className="menu">
			<header className="menu-btns-container">
				{getUniqueCategories().map((value, index) => {
					return (
						<button
							key={index}
							className="menu-btn"
							onClick={() => setMenuSelection(value)}
						>
							{value}
						</button>
					);
				})}
			</header>
			<div className="menu-items">
				{setMenuCategories().map((item, index) => {
					return <MenuItem key={index} {...item} />;
				})}
			</div>
		</section>
	);
};

export default Menu;
