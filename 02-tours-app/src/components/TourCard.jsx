import React, { useState } from "react";

const TourCard = ({ id, name, info, image, price, removeTour }) => {
	const [showText, setShowText] = useState(false);
	return (
		<article className="tour-card-container">
			<img className="tour-img" src={image} alt={name} />
			<div className="tour-header">
				<h2 className="tour-title">{name}</h2>
				<h2 className="tour-price">${price}</h2>
			</div>
			<div className="tour-info-container">
				<p className="tour-info">
					{!showText ? info.slice(0, 200) + "..." : info}
					<button
						className="tour-info-btn"
						onClick={() => setShowText(!showText)}
					>
						{!showText ? "Read More" : "Show Less"}
					</button>
				</p>
			</div>
			<button className="tour-btn" onClick={() => removeTour(id)}>
				Not interested
			</button>
		</article>
	);
};

export default TourCard;
