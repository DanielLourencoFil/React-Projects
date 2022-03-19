import React from "react";

const Hero = () => {
	return (
		<header className="hero">
			<div className="hero-info-container">
				<h1 className="main-title hero-title">React Projects</h1>
				<p className="hero-text">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
					placeat <span>React</span> ducimus suscipit numquam sunt dolores illum
					ab? Excepturi, ipsa. Sed saepe reiciendis vel odio eveniet temporibus
					obcaecati error.
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
