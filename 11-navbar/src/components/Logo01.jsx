import React from "react";

const Logo01 = () => {
	const logoCss = {
		fontSize: "1.75rem",
		textShadow: "1px 1px 1px #777",
		fontWeight: "700",
		color: "#222",
		lineHeight: "1",
	};
	const logoSpan = {
		color: "#5353ff",
		textShadow: "none",
	};
	return (
		<p style={logoCss}>
			Code
			<span style={logoSpan}>Ergo</span>
			Sum
		</p>
	);
};

export default Logo01;
