import React from "react";

const Hero = () => {
	return (
		<header className="hero">
			<div className="hero-info-container">
				<h1 className="main-title hero-title">React Projects</h1>
				<p className="hero-text">
					As a big journey is made of many small steps, and big things are made
					of small components, here you can see some of the little pieces I made
					on my way into the land of <span>React</span>
				</p>
				<a href="#projects">
					<button className="hero-btn">Go to Projects</button>
				</a>
			</div>
			<img src="../logo512.png" alt="react logo" className="hero-img" />
		</header>
	);
};

export default Hero;
