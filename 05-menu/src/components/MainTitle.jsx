import React from "react";

const MainTitle = ({ title }) => {
	const titleStyles = {
		position: "relative",
		fontSize: "2.5rem",
		color: "#08213d",
		marginTop: "2rem",
	};
	const underlineStyles = {
		width: "40%",
		height: "5px",
		bordeRadius: "0.5rem",
		margin: "0 auto",
		marginTop: ".5rem",
		backgroundColor: "rgb(197, 157, 95)",
	};

	return (
		<div>
			<h1 style={titleStyles}>{title}</h1>
			<div style={underlineStyles}></div>
		</div>
	);
};

export default MainTitle;
