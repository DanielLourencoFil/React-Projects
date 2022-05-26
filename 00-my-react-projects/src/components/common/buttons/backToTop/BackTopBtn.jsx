import React, { useState, useEffect } from "react";
import "./backTopBtn.css";
import { FaArrowCircleUp } from "react-icons/fa";

const BackTopBtn = ({ returnTo }) => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		const event = window.addEventListener("scroll", (e) => {
			if (window.scrollY > window.innerHeight * 1.1) {
				setShowBtn(true);
			} else {
				setShowBtn(false);
			}
			return () => window.removeEventListener("scroll", event);
		});
	}, []);
	return (
		<button
			id="back-to-top-btn"
			disabled={!showBtn}
			className={showBtn ? "show-back-btn" : ""}
		>
			<a href={returnTo}>
				<FaArrowCircleUp className="arrow-up-icon" />
			</a>
		</button>
	);
};

export default BackTopBtn;
