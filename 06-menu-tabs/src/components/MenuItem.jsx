import React from "react";
import { BiChevronsRight } from "react-icons/bi";

const MenuItem = ({ company, dates, duties, title }) => {
	return (
		<div className="menu-item-container">
			<header className="menu-header">
				<h1 className="menu-main-title">{title}</h1>
				<h2 className="menu-second-title">{company}</h2>
				<p className="menu-dates">{dates}</p>
			</header>
			<div className="menu-info">
				{duties.map((duty, index) => {
					return (
						<div key={index} className="menu-info-item">
							<BiChevronsRight className="menu-icon" />
							<p className="menu-text">{duty}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MenuItem;
