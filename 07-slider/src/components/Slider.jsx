import React from "react";
import { ImQuotesRight } from "react-icons/im";

const Slider = ({ image, name, title, quote, position, length, index }) => {
	let move = "next";
	if (index === position) move = "active";
	if ((position === 0 && index === length - 1) || index === position - 1)
		move = "last";
	return (
		<div className={`slider ${move}`}>
			<div className="review-img-container">
				<img className="review-img" src={image} alt={name} />
			</div>
			<h2 className="review-name">{name}</h2>
			<h3 className="review-title">{title}</h3>
			<p className="review-quote">{quote}</p>
			<ImQuotesRight className="review-quote-icon" />
		</div>
	);
};

export default Slider;
