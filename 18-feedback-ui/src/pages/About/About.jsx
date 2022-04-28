import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import { FeedbackContextHook } from "../../components/Context/FeedbackContext";

const About = () => {
	const { isDarkMode } = FeedbackContextHook();
	return (
		<div
			className={`${"about-container"} ${
				isDarkMode ? "darkmode-bg-dark darkmode-color-light" : ""
			}`}
		>
			<h1>About Feedback UI </h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
				perspiciatis nihil necessitatibus, vero inventore, corporis officiis
				atque minima fugiat repellendus sunt eligendi amet ratione quo unde quos
				commodi voluptas iure explicabo. Impedit autem voluptatum numquam. Nulla
				assumenda aliquid doloribus? Aliquid exercitationem velit voluptatum
				officia provident nulla mollitia architecto odio sunt reprehenderit
				iste, dolorum odit suscipit earum dicta facere nostrum eos voluptatem
				similique molestiae blanditiis. Ipsum eveniet impedit fugiat maiores?
				Amet temporibus nemo error facere nostrum!
			</p>
			<Link to="/">
				<button className="back-home-btn"> Back to Feedback UI</button>
			</Link>
		</div>
	);
};

export default About;
