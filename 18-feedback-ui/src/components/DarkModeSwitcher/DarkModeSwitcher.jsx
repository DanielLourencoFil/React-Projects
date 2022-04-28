import "./DarkModeSwitcher.css";
import React from "react";
import { FeedbackContextHook } from "../Context/FeedbackContext";

const DarkModeSwitcher = () => {
	const { isDarkMode, setIsDarkMode } = FeedbackContextHook();
	return (
		<div className="darkmode-container">
			<h3 className="darkmode-title">Dark Mode</h3>
			<div className="darkmode-slider">
				<button
					className={`${isDarkMode ? "darkmode-btn active" : "darkmode-btn"}`}
					onClick={() => setIsDarkMode(!isDarkMode)}
				>
					{isDarkMode ? "On" : "Off"}
				</button>
			</div>
		</div>
	);
};

export default DarkModeSwitcher;
