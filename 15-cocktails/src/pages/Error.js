import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section className="main-section error-section">
			<h1>Opps!</h1>
			<h2>Can't Found the Page</h2>
			<Link to="/" className="back-to-home-btn">
				Back to Home
			</Link>
		</section>
	);
};

export default Error;
