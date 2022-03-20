import React from "react";
import TourCard from "./TourCard";

const ToursDisplayer = ({ tours, isError, removeTour }) => {
	// const {tours, isError, removeTour} = props
	console.log(tours);
	return (
		<div className="tours-container">
			<h1 className="main-title">Our Tours</h1>
			{isError && <p>{isError}</p>}
			{tours.map((tour) => {
				return <TourCard key={tour.id} {...tour} removeTour={removeTour} />;
			})}
		</div>
	);
};

export default ToursDisplayer;
