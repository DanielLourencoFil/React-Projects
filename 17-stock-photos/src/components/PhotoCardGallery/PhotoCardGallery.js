import React from "react";
import PhotoCard from "../PhotoCard/PhotoCard";
import "./PhotoCardGallery.css";
import Loading from "../Loading/Loading";

const PhotoCardGallery = ({ photos, isLoading }) => {
	return (
		<>
			<div className="photo-card-container">
				{photos?.map((item, index) => {
					return <PhotoCard key={item.id + index} item={item} />;
				})}
			</div>
			{isLoading && <Loading />}
		</>
	);
};

export default PhotoCardGallery;
