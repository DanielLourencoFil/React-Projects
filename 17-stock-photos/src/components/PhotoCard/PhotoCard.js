import "./PhotoCard.css";

import React from "react";

const PhotoCard = ({ item }) => {
	const {
		alt_description,
		likes,
		urls: { regular },
		user: {
			name,
			portfolio_url,
			profile_image: { medium },
		},
	} = item;

	return (
		<article className="photo-card">
			<img className="img-photo-card" src={regular} alt={alt_description} />
			<div className="photo-card-info-container">
				<div className="photo-card-info">
					<p className="photo-card-name">{name}</p>
					<p className="photo-card-likes">{`${likes} likes`}</p>
				</div>
				<a href={portfolio_url}>
					<img className="author-img" src={medium} alt={name} />
				</a>
			</div>
		</article>
	);
};

export default PhotoCard;

// const {
// 	alt_description: alt,
// 	likes,
// 	urls: { small: small },
// 	user: {
// 		links: { html: authorLink },
// 	},
// 	user: { first_name: firstName },
// 	user: { last_name: lastName },
// 	user: {
// 		profile_image: { small: authorImage },
// 	},
// } = item;
