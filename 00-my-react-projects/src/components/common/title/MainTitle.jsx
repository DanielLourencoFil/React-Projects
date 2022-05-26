import React from "react";

const MainTitle = ({ title, underlineColor }) => {
	const titleStyles = {
		textAlign: "center",
		position: "relative",
		fontSize: "2rem",
		fontWeight: "600",
		letterSpacing: "2px",
		color: "#ddd",
	};
	const underlineStyles = {
		width: "90px",
		height: "4px",
		bordeRadius: "0.5rem",
		margin: "0 auto",
		marginTop: ".5rem",
		marginBottom: "3rem",
		backgroundColor: underlineColor,
		borderRadius: "5px",
	};

	return (
		<div>
			<h1 style={titleStyles}>{title}</h1>
			<div style={underlineStyles}></div>
		</div>
	);
};

export default MainTitle;
