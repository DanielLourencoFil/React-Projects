import React from "react";

const ReviewCard = ({ id, name, job, image, text }) => {
	return (
		<article className="review-card-header">
			<div className="img-container">
				<img className="review-img" src={image} alt={name} />
			</div>
			<h1 className="review-name">{name}</h1>
			<h2 className="review-job">{job}</h2>
			<p className="review-text">{text}</p>
		</article>
	);
};

export default ReviewCard;
