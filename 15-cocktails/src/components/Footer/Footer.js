import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<section className="footer">
			<h4>CodeErgoSum</h4>
			<p>{new Date().getFullYear()}</p>
		</section>
	);
};

export default Footer;
