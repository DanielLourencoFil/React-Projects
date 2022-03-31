import React from "react";
import "./Hero.css";
import { useGlobalContext } from "../../context";

const Hero = () => {
	const { submenuOpen } = useGlobalContext();
	return (
		<div className="hero" onMouseOver={() => submenuOpen(false)}>
			<div className="section-center hero-center">
				<div className="hero-bg"></div>
				<div className="hero-left-side">
					<h1 className="hero-title">Hero Title or small Description </h1>
					<p className="hero-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quod
						adipisci, accusantium sit necessitatibus reprehenderit ut quas eum
						nostrum provident voluptatibus? Itaque vel suscipit dignissimos
						debitis impedit expedita, cum quasi?
					</p>
					<button className="hero-btn">Click Me</button>
				</div>
				<div className="hero-right-side">
					<div className="hero-img">
						<p>Some fancy Hero image goes here</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
