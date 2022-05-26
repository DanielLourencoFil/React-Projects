import React from "react";
import "./footer.css";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer scroll-section section-main">
			<div className="copy-rigth">
				Copyrigth &copy;{"  "}
				<span className="logo-footer">
					Code<span>Ergo</span>Sum
				</span>
			</div>
			<span id="current-year">{currentYear}</span>
		</footer>
	);
};

export default Footer;
