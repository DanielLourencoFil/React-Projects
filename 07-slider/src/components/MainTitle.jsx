import React from "react";

const MainTitle = ({ title }) => {
	const mainStyles = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "1rem",
	};
	const titleStyles = {
		textAlign: "center",
		position: "relative",
		fontSize: "2rem",
		letterSpacing: "1px",
		color: "#555",
	};
	const underlineStyles = {
		fontSize: "1.75rem",
		lineHeight: "1",
		fontWeight: "900",
		color: "#ba5d2c",
	};

	return (
		<div style={mainStyles}>
			<div style={underlineStyles}>/</div>
			<h1 style={titleStyles}>{title}</h1>
		</div>
	);
};

export default MainTitle;
