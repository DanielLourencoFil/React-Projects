import React from "react";

const Logo01 = () => {
	const logoCss = {
		fontSize: "2rem",
		textShadow: "4px 4px 6px #555",
		fontWeight: "700",
		color: "#fff",
		letterSpacing: "2px",
		lineHeight: "1",
		margin: "0",
	};
	const logoSpan = {
		color: "#5353ff",
		textShadow: "none",
	};
	return <p style={logoCss}>@Company</p>;
};

export default Logo01;
