import React from "react";
import { ImQuotesRight } from "react-icons/im";

const Slider = ({ image, name, title, quote, position, length, index }) => {
	let move = "next";
	let currentIndex = length - 1 - (position + index);
	currentIndex = currentIndex < 0 ? length + currentIndex : currentIndex;
	if (currentIndex === 0) move = "active";
	if (currentIndex === length - 1) move = "last";

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
