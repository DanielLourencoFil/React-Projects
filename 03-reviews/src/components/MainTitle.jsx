import React from "react";

const MainTitle = ({ title }) => {
	const titleStyles = {
		position: "relative",
		fontSize: "3rem",
		color: "#08213d",
		// marginTop: "3rem",
	};
	const underlineStyles = {
		width: "50%",
		height: "5px",
		bordeRadius: "0.5rem",
		margin: "0 auto",
		marginTop: "1rem",
		backgroundColor: "#4a9fff",
	};

	return (
		<div>
			<h1 style={titleStyles}>{title}</h1>
			<div style={underlineStyles}></div>
		</div>
	);
};

export default MainTitle;
