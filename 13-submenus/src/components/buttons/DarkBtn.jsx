import React from "react";
import "./DarkBtn.css";

const DarkBtn = ({ text, url, type = "text", extraCss, cb }) => {
	return (
		<button type={type} className={`dark-btn ${extraCss}`} onClick={cb}>
			<a href={url}>{text}</a>
		</button>
	);
};

export default DarkBtn;
