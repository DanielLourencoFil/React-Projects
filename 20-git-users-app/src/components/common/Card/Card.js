import "./Card.css";

import React from "react";

const Card = ({ children, text }) => {
	return (
		<article className="generic-card wrapper">
			<p className="card-label wrapper">{text}</p>
			{children}
		</article>
	);
};

export default Card;
