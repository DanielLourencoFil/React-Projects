import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const ReviewsContainer = ({ data }) => {
	const [reviewIndex, setReviewIndex] = useState(0);
	console.log(reviewIndex, "index");

	const indexCounter = (changeValue) => {
		const newIndex = reviewIndex + changeValue;
		setReviewIndex(checkIndex(newIndex));
	};
	const checkIndex = (newIndex) => {
		if (newIndex > data.length - 1) {
			return 0;
		}
		if (newIndex < 0) {
			return data.length - 1;
		}
		return newIndex;
	};
	const randomIndex = () => {
		let randomIndex = Math.floor(Math.random() * data.length);
		if (randomIndex == reviewIndex) {
			randomIndex = Math.floor(Math.random() * data.length);
		}
		setReviewIndex(randomIndex);
	};
	return (
		<section className="review-container">
			<ReviewCard {...data[reviewIndex]} />
			<div>
				<FaChevronLeft className="review-btn" onClick={() => indexCounter(1)} />
				<FaChevronRight
					className="review-btn"
					onClick={() => indexCounter(-1)}
				/>
			</div>
			<button className="review-btn-random" onClick={randomIndex}>
				Surprise Me
			</button>
		</section>
	);
};

export default ReviewsContainer;
