import "./Loading.css";
import React from "react";

const Loading = () => {
	return (
		<div className="spining-loader">
			<div className="spining-loader-circle"></div>
			<p className="spining-loader-text">Loading</p>
		</div>
	);
};

export default Loading;
