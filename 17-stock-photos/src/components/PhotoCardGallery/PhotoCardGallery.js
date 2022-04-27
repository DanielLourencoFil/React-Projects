import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoCardGallery.css";
import Loading from "../Loading/Loading";

const PhotoCardGallery = ({ photos, loading }) => {
	return (
		<>
			<div className="photo-card-container">
				{photos.map((item) => {
					return <PhotoCard key={item.id} item={item} />;
				})}
			</div>
			{loading && <Loading />}
		</>
	);
};

export default PhotoCardGallery;
