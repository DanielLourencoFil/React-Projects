import React from "react";
import "./MainTitle.css";

const MainTitle = ({ title }) => {
	return (
		<div className="main-title">
			<h1>{title}</h1>
			<div className="underline"></div>
		</div>
	);
};

export default MainTitle;
