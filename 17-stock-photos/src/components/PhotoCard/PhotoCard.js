import "./PhotoCard.css";

import React from "react";

const PhotoCard = ({ item }) => {
	const {
		alt_description: alt,
		likes,
		urls: { small: photo },
		user: {
			links: { html: authorLink },
		},
		user: { first_name: firstName },
		user: { last_name: lastName },
		user: {
			profile_image: { small: authorImage },
		},
	} = item;
	console.log();
	return (
		<article className="photo-card">
			<img className="img-photo-card" src={photo} alt={alt} />
			<div className="photo-card-info-container">
				<div className="photo-card-info">
					<p className="photo-card-name">{`${firstName} ${lastName}`}</p>
					<p className="photo-card-likes">{`${likes} likes`}</p>
				</div>
				<a href={authorLink}>
					<img
						className="author-img"
						src={authorImage}
						alt={`${firstName} ${lastName}`}
					/>
				</a>
			</div>
		</article>
	);
};

export default PhotoCard;
