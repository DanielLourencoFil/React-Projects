import React, { useState } from "react";
import "./backTopBtn.css";
import { FaArrowCircleUp } from "react-icons/fa";

const BackTopBtn = () => {
	const [showBtn, setShowBtn] = useState(false);
	window.addEventListener("scroll", (e) => {
		if (window.scrollY > window.innerHeight * 1.1) {
			setShowBtn(true);
		} else {
			setShowBtn(false);
		}
	});
	return (
		<button
			id="back-to-top-btn"
			disabled={!showBtn}
			className={showBtn ? "show-back-btn" : ""}
		>
			<a href="#navbar">
				<FaArrowCircleUp className="arrow-up-icon" />
			</a>
		</button>
	);
};

export default BackTopBtn;
